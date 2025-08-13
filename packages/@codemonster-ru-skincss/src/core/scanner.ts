import fs from 'fs';
import path from 'path';
import ThemeClass from './theme';
import ConfigClass from './config';
import * as styles from '../styles';
import childProcess from 'child_process';
import { version } from '../../package.json';
import { findVar, findWholeWord } from './helper';
import { deepMerge, camelToSnakeCase } from './helper';
import {
    sourceRegex,
    importRegex,
    commentedRegex,
    ignoredSourceRegex,
    explicitlySourceRegex,
    deleteIgnoredSourceRegex,
    deleteExplicitlySourceRegex,
} from '../patterns/scanner';

export default class ScannerClass {
    private _styles = {};
    private _theme: ThemeClass;
    private _arbitraryStyles: arbitraryStylesType = {};

    constructor() {
        this._theme = new ThemeClass();
    }

    get theme() {
        return this._theme;
    }

    get styles() {
        return this._styles;
    }

    private set styles(value: object) {
        this._styles = value;
    }

    get arbitraryStyles(): arbitraryStylesType {
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

    scanStyles = (content: string, scanResult: ScanResult, breakpoints: boolean = false) => {
        if (breakpoints) {
            let output: breakpointStylesType = {};

            Object.keys(this.styles).map(style => {
                Object.keys(this.theme.breakpoints).map((breakpoint: string) => {
                    if (findWholeWord(content, `${breakpoint}:${style}`)) {
                        if (!output[breakpoint as keyof typeof output]) {
                            output[breakpoint as keyof typeof output] = [];
                        }

                        output[breakpoint as keyof typeof output].push(style);
                    }
                });
            });

            return output;
        } else {
            let output: string[] = [];

            Object.keys(this.styles).map(style => {
                if (scanResult.styles.includes(style)) {
                    return;
                }

                if (style.includes(',')) {
                    output.push(style);
                } else {
                    if (findWholeWord(content, style)) {
                        output.push(style);
                    }
                }
            });

            return output;
        }
    };

    scanArbitraryNumberStyles = (content: string, index: string, rule: string, breakpoints: boolean = false) => {
        const output: breakpointArbitraryStylesType = {};
        const themeBreakpoints = breakpoints ? this.theme.breakpoints : { null: null };

        Object.keys(themeBreakpoints).map((breakpoint: string) => {
            const breakpointString = breakpoints ? `${breakpoint}:` : '(?<!:)';
            const regex = new RegExp(`${breakpointString}${index.replace('<number>', '[0-9]')}`, 'gi');
            const matched = content.match(regex);

            if (matched) {
                matched.map((matchedValue: string) => {
                    matchedValue = matchedValue.replace(breakpointString, '');

                    const value = JSON.parse(
                        JSON.stringify(rule).replace(
                            '<number>',
                            matchedValue.replace(index.replace('<number>', ''), ''),
                        ),
                    );

                    if (breakpoints) {
                        if (!output[breakpoint]) {
                            output[breakpoint] = {};
                        }

                        output[breakpoint][matchedValue] = value;
                    } else {
                        output[matchedValue] = value;
                    }
                });
            }
        });

        return output;
    };

    scanArbitraryVariableStyles = (content: string, index: string, rule: string, breakpoints: boolean = false) => {
        const output: breakpointArbitraryStylesType = {};
        const themeBreakpoints = breakpoints ? this.theme.breakpoints : { null: null };

        Object.keys(themeBreakpoints).map((breakpoint: string) => {
            const breakpointString = breakpoints ? `${breakpoint}:` : '(?<!:)';
            const regex = new RegExp(
                `${breakpointString}${index.replace('(<variable>)', '\\(--[a-z-0-9,\\s]+\\)')}`,
                'gi',
            );
            const matched = content.match(regex);

            if (matched) {
                matched.map(matchedValue => {
                    matchedValue = matchedValue.replace(breakpointString, '');

                    const subMatched = matchedValue.match(/--[a-z-0-9,\s]+/gi);

                    if (subMatched) {
                        const value = JSON.parse(JSON.stringify(rule).replace('<variable>', subMatched[0]));

                        if (breakpoints) {
                            if (!output[breakpoint]) {
                                output[breakpoint] = {};
                            }

                            output[breakpoint][matchedValue] = value;
                        } else {
                            output[matchedValue] = value;
                        }
                    }
                });
            }
        });

        return output;
    };

    scanArbitraryValueStyles = (content: string, index: string, rule: string, breakpoints: boolean = false) => {
        const output: breakpointArbitraryStylesType = {};
        const themeBreakpoints = breakpoints ? this.theme.breakpoints : { null: null };

        Object.keys(themeBreakpoints).map((breakpoint: string) => {
            const breakpointString = breakpoints ? `${breakpoint}:` : '(?<!:)';
            const regex = new RegExp(`${breakpointString}${index.replace('[<value>]', '\\[(.*?)\\]')}`, 'gi');
            const matched = content.match(regex);

            if (matched) {
                matched.map(matchedValue => {
                    matchedValue = matchedValue.replace(breakpointString, '');

                    const subMatched = matchedValue.match(/\[(.*?)\]/gi);

                    if (subMatched) {
                        const value = JSON.parse(
                            JSON.stringify(rule).replace('<value>', subMatched[0].replace('[', '').replace(']', '')),
                        );

                        if (breakpoints) {
                            if (!output[breakpoint]) {
                                output[breakpoint] = {};
                            }

                            output[breakpoint][matchedValue] = value;
                        } else {
                            output[matchedValue] = value;
                        }
                    }
                });
            }
        });

        return output;
    };

    scanArbitraryStyles = (content: string, breakpoints: boolean = false) => {
        let output: arbitraryStylesType | breakpointArbitraryStylesType = {};

        Object.keys(this.arbitraryStyles).map((group: string) => {
            const arbitraryValue = this.arbitraryStyles[group as keyof typeof this.arbitraryStyles];

            Object.keys(arbitraryValue).map(index => {
                const rule = arbitraryValue[index as keyof typeof arbitraryValue];

                switch (true) {
                    case index.includes('<number>'): {
                        output = deepMerge(output, this.scanArbitraryNumberStyles(content, index, rule, breakpoints));

                        break;
                    }
                    case index.includes('(<variable>)'): {
                        output = deepMerge(output, this.scanArbitraryVariableStyles(content, index, rule, breakpoints));

                        break;
                    }
                    case index.includes('[<value>]'): {
                        output = deepMerge(output, this.scanArbitraryValueStyles(content, index, rule, breakpoints));

                        break;
                    }
                }
            });
        });

        return output;
    };

    scanFile = (content: string, scanResult: ScanResult): ScanResult => {
        return {
            styles: this.scanStyles(content, scanResult) as string[],
            breakpointStyles: this.scanStyles(content, scanResult, true) as breakpointStylesType,
            arbitraryStyles: this.scanArbitraryStyles(content) as arbitraryStylesType,
            breakpointArbitraryStyles: this.scanArbitraryStyles(content, true) as breakpointArbitraryStylesType,
        };
    };

    parseFiles = async (files: string[]) => {
        let output: ScanResult = {
            styles: [],
            breakpointStyles: {},
            arbitraryStyles: {},
            breakpointArbitraryStyles: {},
        };

        await Promise.all(
            files.map(async (file: string) => {
                const loadedFile = fs.readFileSync(file, 'utf8');

                if (loadedFile) {
                    const scanResult: ScanResult = this.scanFile(loadedFile, output);

                    output.styles = deepMerge(output.styles, scanResult.styles);
                    output.breakpointStyles = deepMerge(output.breakpointStyles, scanResult.breakpointStyles);
                    output.arbitraryStyles = deepMerge(output.arbitraryStyles, scanResult.arbitraryStyles);
                    output.breakpointArbitraryStyles = deepMerge(
                        output.breakpointArbitraryStyles,
                        scanResult.breakpointArbitraryStyles,
                    );
                }
            }),
        );

        return output;
    };

    prepareStyle = (style: string, styles: object) => {
        const output: { [key: string]: object } = {};

        let properties = {};

        if (styles[style as keyof typeof styles] !== undefined) {
            properties = styles[style as keyof typeof styles];
        }

        output[style] = properties;

        return output;
    };

    prepareStyles = (styles: string[]) => {
        let newStyles = {};

        styles.map((style: string) => {
            newStyles = deepMerge(newStyles, this.prepareStyle(style, this.styles));
        });

        return newStyles;
    };

    prepareArbitraryStyles = (arbitraryStyles: object) => {
        let newStyles = {};

        Object.keys(arbitraryStyles).map((style: string) => {
            newStyles = deepMerge(newStyles, this.prepareStyle(style, arbitraryStyles));
        });

        return newStyles;
    };

    prepareBreakpointStyles = (breakpointStyles: breakpointStylesType) => {
        let newStyles: breakpointArbitraryStylesType = {};

        Object.keys(breakpointStyles).map((breakpointIndex: string) => {
            const styles = breakpointStyles[breakpointIndex];

            styles.map((style: string, styleIndex: number) => {
                deepMerge(newStyles, { [breakpointIndex]: this.prepareStyle(style, this.styles) });
            });
        });

        return newStyles;
    };

    prepareBreakpointArbitraryStyles = (breakpointArbitraryStyles: breakpointArbitraryStylesType) => {
        let newStyles: breakpointArbitraryStylesType = {};

        Object.keys(breakpointArbitraryStyles).map((breakpointIndex: string) => {
            const styles = breakpointArbitraryStyles[breakpointIndex];

            Object.keys(styles).map((style: string, styleIndex: number) => {
                deepMerge(newStyles, { [breakpointIndex]: this.prepareStyle(style, styles) });
            });
        });

        return newStyles;
    };

    prepareScanResult = (foundStyles: ScanResult) => {
        return {
            styles: deepMerge(
                this.prepareStyles(foundStyles.styles),
                this.prepareArbitraryStyles(foundStyles.arbitraryStyles),
            ),
            breakpointStyles: deepMerge(
                this.prepareBreakpointStyles(foundStyles.breakpointStyles),
                this.prepareBreakpointArbitraryStyles(foundStyles.breakpointArbitraryStyles),
            ),
        };
    };

    convertStyleToCss = (styles: StylesType, spaces: string = '') => {
        let css = '';

        Object.keys(styles).map((style: string, index: number) => {
            let selector = style.includes(',') ? style : `.${style}`;

            selector = selector.replace(/[*+?^${}()|[\]\\]/g, '\\$&');

            let properties = {};

            if (styles[style as keyof typeof styles] !== undefined) {
                properties = styles[style as keyof typeof styles];
            }

            css += `${spaces}${selector} {\n`;

            Object.keys(properties).forEach((value: string) => {
                const prop: string = value.includes('-') ? value : camelToSnakeCase(value);
                const propValue: string = properties[value as keyof typeof properties];

                css += `${spaces}    ${prop}: ${propValue};\n`;
            });

            css += `${spaces}}`;

            if (!spaces || (spaces && index + 1 !== Object.keys(styles).length)) {
                css += '\n\n';
            }
        });

        return css;
    };

    convertBreakpointStyleToCss = (breakpointArbitraryStyles: breakpointArbitraryStylesType) => {
        let css = '';

        Object.keys(breakpointArbitraryStyles).map((breakpointIndex: string, index: number) => {
            css += `@media (width >= ${this.theme.breakpoints[breakpointIndex]}) {\n`;
            css += this.convertStyleToCss(breakpointArbitraryStyles[breakpointIndex], '    ');
            css += '\n}';

            if (index + 1 !== Object.keys(breakpointArbitraryStyles).length) {
                css += '\n\n';
            }
        });

        return css;
    };

    convertToCss = (obj: { styles: StylesType; breakpointStyles: breakpointArbitraryStylesType }) => {
        return this.convertStyleToCss(obj.styles) + this.convertBreakpointStyleToCss(obj.breakpointStyles);
    };

    getCss = async (files: string[]) => {
        return this.convertToCss(this.prepareScanResult(await this.parseFiles(files)));
    };

    getVarCss = (css: string) => {
        let varCss = '';
        const vars = this.theme.getVars();

        Object.keys(vars).map((themeIndex: string) => {
            if (findVar(css, themeIndex)) {
                varCss += `    ${themeIndex}: ${vars[themeIndex as keyof typeof vars]};\n`;
            }
        });

        return varCss;
    };

    applyCss = async (config: ConfigClass, code: string) => {
        let files: string[] = [];
        const replaced = [...code.matchAll(importRegex)];

        if (replaced) {
            await this.loadCss();
            files = await this.scanDirectory(config);
            let css = await this.getCss(files);

            if (css) {
                const varCss = this.getVarCss(css);

                if (varCss) {
                    css = `:root {\n${varCss}}\n\n${css}`;
                }

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

                code =
                    code.slice(0, replaced[0].index) +
                    `/* skincss v${version} | MIT License | https://skincss.com */\n` +
                    css +
                    code.slice(replaced[0].index + replaced[0][0].length, code.length);
                code = code.replace(deleteExplicitlySourceRegex, '');
                code = code.replace(deleteIgnoredSourceRegex, '');
            }
        }

        return { code: code, files: files };
    };
}
