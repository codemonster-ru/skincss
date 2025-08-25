import path from 'path';
import { Dirent } from 'fs';
import ConfigClass from './config';
import binaryExtensions from '../binaryExtensions';
import { getExtension, findWholeWords } from './helper';
import fs, { ObjectEncodingOptions, PathLike, PathOrFileDescriptor } from 'fs';
import {
    sourceRegex,
    importRegex,
    commentedRegex,
    ignoredSourceRegex,
    explicitlySourceRegex,
} from '../patterns/scanner';

const fsReadFileSync = fs.readFileSync;
const fsReaddirSync = fs.readdirSync;
const readFileSync = async (
    name: PathOrFileDescriptor,
    options:
        | {
              encoding: BufferEncoding;
              flag?: string | undefined;
          }
        | BufferEncoding,
) => fsReadFileSync(name, options);
const readdirSync = async (
    path: PathLike,
    options: ObjectEncodingOptions & {
        withFileTypes: true;
        recursive?: boolean | undefined;
    },
) => fsReaddirSync(path, options);

export default class ScannerClass {
    private _files: string[] = [];
    private _foundStyles: ScanFileResult = {
        styles: [],
        arbitraryStyles: [],
    };

    get files(): string[] {
        return this._files;
    }

    set files(files: string[]) {
        this._files = files;
    }

    get foundStyles(): ScanFileResult {
        return this._foundStyles;
    }

    set foundStyles(obj: ScanFileResult) {
        this._foundStyles = obj;
    }

    isCssFile = (filePath: string): boolean => getExtension(filePath) === 'css' || filePath.includes('&lang.css');

    isPotentialFile = (filePath: string) => !filePath.includes('.vite') && this.isCssFile(filePath);

    isDetermineSource = async (code: string, config: ConfigClass, filePath: string): Promise<boolean> => {
        if (config.enable || !this.isPotentialFile(filePath)) {
            return false;
        }

        if (!this.isImport(code)) {
            return false;
        }

        const baseSource: string = this.getBaseSource(code, filePath);
        const getExplicitlySources: string[] = this.getExplicitlySources(code, filePath);
        const getIgnoredSources: string[] = this.getIgnoredSources(code, filePath);

        if (baseSource === 'none' && !getExplicitlySources) {
            return false;
        }

        config.enable = true;
        config.baseSource = baseSource ? baseSource : config.base;
        config.explicitlySources = getExplicitlySources ? getExplicitlySources : [];
        config.ignoredSources = getIgnoredSources ? getIgnoredSources : [];

        return true;
    };

    isImport = (code: string): boolean => (code.replaceAll(commentedRegex, '').match(importRegex) ? true : false);

    isDir = (filePath: string) => fs.statSync(filePath).isDirectory();

    getBaseSource = (code: string, filePath: string): string => {
        const replacedCode = code.replaceAll(commentedRegex, '');
        const matchedSource = replacedCode.match(sourceRegex);

        if (!matchedSource) {
            return '';
        }

        const matchedNoneSourcePath = matchedSource[0].match(/(?<=source[(])none(?=[)])/g);

        if (matchedNoneSourcePath) {
            return 'none';
        }

        const matchedSourcePath = matchedSource[0].match(/(?<=source[(]['|"]).*(?=['|"][)])/g);

        if (!matchedSourcePath) {
            return '';
        }

        const directory = path.dirname(filePath);
        const sourcePath = path.join(directory, matchedSourcePath[0]);

        if (!this.isDir(sourcePath)) {
            throw new Error(
                `The path given to \`source(...)\` must be a directory, but got \`source(${sourcePath})\` instead.`,
            );
        }

        return sourcePath;
    };

    getExplicitlySources = (code: string, filePath: string): string[] => {
        const sources: string[] = [];
        const replacedCode = code.replaceAll(commentedRegex, '');
        const matchedSource = replacedCode.matchAll(explicitlySourceRegex);

        if (!matchedSource) {
            return sources;
        }

        [...matchedSource].map(source => {
            const directory = path.dirname(filePath);
            const sourcePath = path.join(directory, source[0]);

            if (!this.isDir(sourcePath)) {
                throw new Error(
                    `The path given to \`source(...)\` must be a directory, but got \`source(${sourcePath})\` instead.`,
                );
            }

            sources.push(sourcePath);
        });

        return sources;
    };

    getIgnoredSources = (code: string, filePath: string): string[] => {
        const sources: string[] = [];
        const replacedCode = code.replaceAll(commentedRegex, '');
        const matchedSource = replacedCode.matchAll(ignoredSourceRegex);

        if (!matchedSource) {
            return sources;
        }

        [...matchedSource].map(source => {
            const directory = path.dirname(filePath);
            const sourcePath = path.join(directory, source[0]);

            if (!this.isDir(sourcePath)) {
                throw new Error(
                    `The path given to \`source(...)\` must be a directory, but got \`source(${sourcePath})\` instead.`,
                );
            }

            sources.push(sourcePath);
        });

        return sources;
    };

    isIgnoredByGit = (filePath: string, gitIgnored: string[]) => gitIgnored.includes(filePath);

    isIgnored = (config: ConfigClass, filePath: string, gitIgnored: string[]): boolean => {
        config.explicitlySources.map(source => {});

        if (filePath.indexOf('node_modules') !== -1) return true;

        const extension = path.extname(filePath).substring(1);

        if (binaryExtensions.includes(extension)) return true;

        const isIgnored = this.isIgnoredByGit(filePath, gitIgnored);

        if (isIgnored) return true;

        return false;
    };

    isSubPathAbsolute = (parentPath: string, childPath: string) => {
        const resolvedParent = path.resolve(parentPath);
        const resolvedChild = path.resolve(childPath);
        const parentWithSeparator = resolvedParent.endsWith(path.sep) ? resolvedParent : resolvedParent + path.sep;

        return resolvedChild.startsWith(parentWithSeparator) || resolvedChild === resolvedParent;
    };

    isIgnoredByConfig = (config: ConfigClass, source: string) => {
        let isIgnoredByConfig = false;

        config.ignoredSources.map((ignoredSource: string) => {
            if (isIgnoredByConfig) {
                return;
            }

            if (this.isSubPathAbsolute(ignoredSource, source)) {
                isIgnoredByConfig = true;
                return;
            }
        });

        return isIgnoredByConfig;
    };

    scanDirectory = async (config: ConfigClass, directory: string = '', gitIgnored: string[]) => {
        let files: string[] = [];
        const sources = directory ? [directory] : [...[config.baseSource], ...config.explicitlySources];
        const sourcePromises = sources.map(async (source: string) => {
            if (!directory.length && !this.isDir(source)) return;
            if (this.isIgnoredByConfig(config, source)) return;

            const dirFiles = await readdirSync(source, { withFileTypes: true });
            const dirPromises = dirFiles.map(async (file: Dirent) => {
                const filePath = path.join(source, file.name).replace(/\\\\/g, '\\');

                if (this.isIgnored(config, filePath, gitIgnored)) return [];
                if (file.isDirectory()) {
                    const deepFiles = await this.scanDirectory(config, filePath, gitIgnored);

                    files = files.concat(deepFiles);
                } else {
                    files.push(filePath);
                }
            });

            await Promise.all(dirPromises);
        });

        await Promise.all(sourcePromises);

        return files;
    };

    scanFile(content: string, stylePattern: string, arbitraryStylePattern: string) {
        let output: ScanFileResult = {
            styles: [],
            arbitraryStyles: [],
        };

        findWholeWords(content, stylePattern).map(math => output.styles.push(math[0]));
        findWholeWords(content, arbitraryStylePattern).map(math => output.arbitraryStyles.push(math[0]));

        return output;
    }

    async readFiles(files: string[]): Promise<string[]> {
        const filePromises = files.map(async (file: string) => await readFileSync(file, { encoding: 'utf8' }));
        const fileContents = await Promise.all(filePromises);

        return fileContents;
    }

    async init(obj: ScannerStylesType) {
        const files: string[] = await this.scanDirectory(obj.config, '', obj.ignored);
        const fileContents = await this.readFiles(files);
        const foundStyles = this.scanFile(fileContents.join(' '), obj.styles, obj.arbitraryStyles);

        foundStyles.styles = Array.from(new Set(foundStyles.styles));
        foundStyles.arbitraryStyles = Array.from(new Set(foundStyles.arbitraryStyles));

        this.files = files;
        this.foundStyles = foundStyles;
    }
}
