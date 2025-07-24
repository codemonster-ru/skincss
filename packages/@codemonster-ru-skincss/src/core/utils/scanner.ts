import path from 'path';
import fs from 'fs';
import childProcess from 'child_process';
import * as styles from '../../styles';
import { default as theme } from '../../themes';
import { camelToSnakeCase } from './helper';
import ConfigClass from './config';

const commentedRegex =
    /[\/][\*][\s\S]*?.*@import[\s]{0,1}['"]{0,1}@codemonster-ru\/skincss['"]{0,1}[;]{0,1}[.*\s\S]*?[\*][\/]/g;
const importRegex = /@import[\s]{0,1}['"]{0,1}@codemonster-ru\/skincss['"]{0,1}[;]{0,1}[.*]*?.*;/g;
const sourceRegex = /@import\s{0,1}['|"]@codemonster-ru\/skincss['|"]\s{0,1}source[(](none|['|"].*['|"])[)];/g;
const explicitlySourceRegex = /(?<=@source[\s]{0,1}['|"]).*(?=['|"];{0,1})/g;
const deleteExplicitlySourceRegex = /[\n]{0,1}@source[\s]{0,1}['|"].*['|"];{0,1}[\n]{0,1}/gs;
const ignoredSourceRegex = /(?<=@source[\s]{0,1}not[\s]{0,1}['|"]).*(?=['|"];{0,1})/g;
const deleteIgnoredSourceRegex = /[\n]{0,1}@source[\s]{0,1}not[\s]{0,1}['|"].*['|"];{0,1}[\n]{0,1}/gs;

interface ScanResult {
    styles: string[];
    arbitraryStyles: object;
}

interface arbitraryStyles {
    [key: string]: object;
}

export default class ScannerClass {
    private _styles = {};
    private _arbitraryStyles: arbitraryStyles = {};
    get styles() {
        return this._styles;
    }
    private set styles(value: object) {
        this._styles = value;
    }
    get arbitraryStyles(): arbitraryStyles {
        return this._arbitraryStyles;
    }
    private set arbitraryStyles(value: { file: string; styles: object }) {
        this._arbitraryStyles[value.file] = value.styles;
    }
    loadCss = async () => {
        if (Object.keys(this.styles).length) {
            return;
        }
        Object.keys(styles).map(async style => {
            const styleObject: {
                [key: string]: {
                    [key: string]: string | object | undefined;
                    arbitraryValues?: object;
                };
            } = styles[style as keyof typeof styles].default;
            if (styleObject.arbitraryValues !== undefined) {
                this.arbitraryStyles = {
                    file: style,
                    styles: styleObject.arbitraryValues,
                };
                delete styleObject.arbitraryValues;
            }
            Object.assign(this.styles, styleObject);
        });
    };
    isImport = (code: string): boolean => {
        return code.replaceAll(commentedRegex, '').match(importRegex) ? true : false;
    };
    isDir = (filePath: string) => {
        return fs.statSync(filePath).isDirectory();
    };
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
    isIgnoredByGit = async (filePath: string) => {
        if (filePath.endsWith('.git') || filePath.endsWith('.github')) {
            return true;
        }
        try {
            const { stdout }: { stdout: string; stderr: string } = await new Promise((resolveZ, reject) => {
                childProcess.exec(
                    `git check-ignore ${filePath}`,
                    (error: childProcess.ExecException | null, stdout: string, stderr: string) => {
                        if (error) {
                            if (error.code === 1) {
                                resolveZ({ stdout: '', stderr: '' });
                            } else {
                                reject(error);
                            }
                        } else {
                            resolveZ({ stdout, stderr });
                        }
                    },
                );
            });
            return stdout.trim() !== '';
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error checking git ignore status for ${filePath}: ${error.message}`);
            }
        }
    };
    isIgnored = async (config: ConfigClass, filePath: string): Promise<boolean> => {
        config.explicitlySources.map(source => {});
        if (filePath.includes('node_modules')) {
            return true;
        }
        const isIgnored = await this.isIgnoredByGit(filePath);
        if (isIgnored) {
            return true;
        }
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
    scanDirectory = async (config: ConfigClass, directory: string = '') => {
        let files: string[] = [];
        const sources = directory ? [directory] : [...[config.baseSource], ...config.explicitlySources];
        await Promise.all(
            sources.map(async (source: string) => {
                if (!this.isDir(source)) {
                    return;
                }
                if (this.isIgnoredByConfig(config, source)) {
                    return;
                }
                const dirFiles = fs.readdirSync(source);
                await Promise.all(
                    dirFiles.map(async (file: string) => {
                        const filePath = path.isAbsolute(file) ? file : path.join(source, file);
                        if (await this.isIgnored(config, filePath)) {
                            return [];
                        }
                        if (this.isDir(filePath)) {
                            const deepFiles = await this.scanDirectory(config, filePath);
                            deepFiles?.map(deepFile => {
                                files.push(deepFile);
                            });
                        } else {
                            files.push(filePath);
                        }
                    }),
                );
            }),
        );
        return files;
    };
    findWholeWord = (text: string, wordToFind: string) => {
        const escapedWord = wordToFind.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedWord}\\b`, 'i');
        return regex.test(text);
    };
    scanFile = (content: string, scanResult: ScanResult): ScanResult => {
        let output: ScanResult = {
            styles: [],
            arbitraryStyles: {},
        };
        Object.keys(this.styles).map(style => {
            if (scanResult.styles.includes(style)) {
                return;
            }
            if (style.includes(',')) {
                output.styles.push(style);
            } else {
                if (this.findWholeWord(content, style)) {
                    output.styles.push(style);
                }
            }
        });
        Object.keys(this.arbitraryStyles).map((group: string) => {
            const arbitraryValue = this.arbitraryStyles[group as keyof typeof this.arbitraryStyles];
            Object.keys(arbitraryValue).map(index => {
                const rule = arbitraryValue[index as keyof typeof arbitraryValue];
                switch (true) {
                    case index.includes('<number>'): {
                        const regex = new RegExp(index.replace('<number>', '[0-9]'), 'gi');
                        const matched = content.match(regex);
                        if (matched) {
                            matched.map(matchedValue => {
                                output.arbitraryStyles = {
                                    [matchedValue]: JSON.parse(
                                        JSON.stringify(rule).replace(
                                            '<number>',
                                            matchedValue.replace(index.replace('<number>', ''), ''),
                                        ),
                                    ),
                                };
                            });
                        }
                        break;
                    }
                    case index.includes('(<variable>)'): {
                        const regex = new RegExp(index.replace('(<variable>)', '\\(--[a-z-0-9,\\s]+\\)'), 'gi');
                        const matched = content.match(regex);
                        if (matched) {
                            matched.map(matchedValue => {
                                const subMatched = matchedValue.match(/--[a-z-0-9,\s]+/gi);
                                if (subMatched) {
                                    output.arbitraryStyles = {
                                        [matchedValue]: JSON.parse(
                                            JSON.stringify(rule).replace('<variable>', subMatched[0]),
                                        ),
                                    };
                                }
                            });
                        }
                        break;
                    }
                    case index.includes('[<value>]'): {
                        const regex = new RegExp(index.replace('[<value>]', '\\[.*\\]'), 'gi');
                        const matched = content.match(regex);
                        if (matched) {
                            matched.map(matchedValue => {
                                const subMatched = matchedValue.match(/\[.*\]/gi);
                                if (subMatched) {
                                    output.arbitraryStyles = {
                                        [matchedValue]: JSON.parse(
                                            JSON.stringify(rule).replace(
                                                '<value>',
                                                subMatched[0].replace('[', '').replace(']', ''),
                                            ),
                                        ),
                                    };
                                }
                            });
                        }
                        break;
                    }
                }
            });
        });
        return output;
    };
    parseFiles = async (files: string[]) => {
        let output: ScanResult = {
            styles: [],
            arbitraryStyles: {},
        };
        await Promise.all(
            files.map(async (file: string) => {
                const loadedFile = fs.readFileSync(file, 'utf8');
                if (loadedFile) {
                    const scanResult: ScanResult = this.scanFile(loadedFile, output);
                    output.styles = output.styles.concat(scanResult.styles);
                    output.arbitraryStyles = Object.assign(output.arbitraryStyles, scanResult.arbitraryStyles);
                }
            }),
        );
        return output;
    };
    prepareStyles = (styles: string[]) => {
        let css = '';
        styles.map((style: string, index: number) => {
            const selector = style.includes(',') ? style : `.${style}`;
            const properties = this.styles[style as keyof typeof this.styles];
            css += `${selector} {\n`;
            Object.keys(properties).forEach((value: string) => {
                const prop: string = value.includes('-') ? value : camelToSnakeCase(value);
                let propValue: string = properties[value];
                css += `    ${prop}: ${propValue};\n`;
            });
            css += '}';
            if (index + 1 !== styles.length) {
                css += '\n\n';
            }
        });
        return css;
    };
    prepareArbitraryStyles = (arbitraryStyles: object) => {
        let css = '';
        const styles = Object.keys(arbitraryStyles);
        styles.map((style: string, index: number) => {
            const selector = style.includes(',') ? style : `.${style}`;
            const properties = arbitraryStyles[style as keyof typeof arbitraryStyles];
            css += `${selector.replace(/[*+?^${}()|[\]\\]/g, '\\$&')} {\n`;
            Object.keys(properties).forEach((value: string) => {
                const prop: string = value.includes('-') ? value : camelToSnakeCase(value);
                let propValue: string = properties[value];
                css += `    ${prop}: ${propValue};\n`;
            });
            css += '}';
            if (index + 1 !== styles.length) {
                css += '\n\n';
            }
        });
        return css;
    };
    prepareScanResult = (foundStyles: ScanResult) => {
        return (
            this.prepareStyles(foundStyles.styles) + '\n\n' + this.prepareArbitraryStyles(foundStyles.arbitraryStyles)
        );
    };
    getCss = async (config: ConfigClass) => {
        const files = await this.scanDirectory(config);
        let css = this.prepareScanResult(await this.parseFiles(files));
        let varCss = '';
        Object.keys(theme).map((key: string) => {
            const property = theme[key as keyof typeof theme];
            if (key === 'colors' && typeof property === 'function') {
                const colors = property();
                Object.keys(colors).map((colorKey: string) => {
                    const color: object | string = colors[colorKey as keyof typeof colors];
                    if (typeof color === 'object') {
                        Object.keys(color).map((toneKey: string, toneIndex: number) => {
                            if (toneIndex === 0) {
                                if (
                                    this.findWholeWord(css, `\(--color-${colorKey}-${toneKey}`) &&
                                    typeof color[500 as keyof typeof color] !== 'undefined'
                                ) {
                                    varCss += `    --color-${colorKey}: ${color[500 as keyof typeof color]};\n`;
                                }
                            }
                            const tone: string = color[toneKey as keyof typeof color];
                            if (this.findWholeWord(css, `\(--color-${colorKey}-${toneKey}`)) {
                                varCss += `    --color-${colorKey}-${toneKey}: ${tone};\n`;
                            }
                        });
                    } else {
                        if (this.findWholeWord(css, `\(--color-${colorKey}`)) {
                            varCss += `    --color-${colorKey}: ${color};\n`;
                        }
                    }
                });
            } else if (key === 'font') {
                Object.keys(property).map((index: string) => {
                    const fontStyle = property[index as keyof typeof property];
                    if (this.findWholeWord(css, `\(--${key}-${index}`)) {
                        varCss += `    --${key}-${index}: ${fontStyle};\n`;
                    }
                });
            }
        });
        if (varCss) {
            css = `:root {\n${varCss}}\n\n${css}`;
        }
        return css;
    };
    applyCss = async (config: ConfigClass, code: string) => {
        await this.loadCss();
        const css = await this.getCss(config);
        if (css) {
            const cutCode: {
                code: string;
                index: number;
                length: number;
                end: number;
            }[] = [];
            const commented = [...code.matchAll(commentedRegex)];
            commented.forEach(match => {
                cutCode.push({
                    code: match[0],
                    index: match.index,
                    length: match[0].length,
                    end: match.index + match[0].length,
                });
            });
            let cutLength = 0;
            cutCode.map(match => {
                code = code.slice(0, match.index - cutLength) + '' + code.slice(match.end - cutLength, code.length);
                cutLength += match.length;
            });
            const replaced = [...code.matchAll(importRegex)];
            if (replaced) {
                code =
                    code.slice(0, replaced[0].index) +
                    `/* skincss v${process.env.npm_package_version} | MIT License | https://skincss.com */\n` +
                    css +
                    code.slice(replaced[0].index + replaced[0][0].length, code.length);
                code = code.replace(deleteExplicitlySourceRegex, '');
                code = code.replace(deleteIgnoredSourceRegex, '');
            }
        }
        return code;
    };
}
