import { ConfigClass } from '@/utils/config.ts';
import { register } from 'tsx/esm/api';

import fs from 'fs';
import url from 'url';
import path from 'path';
import { exec, ExecException } from 'child_process';

export interface Classes {
    [key: string]: string;
}

export interface AllStylesInterface {
    [index: string]: {
        [index: string]: string;
    };
}

declare interface ErrnoException extends Error {
    code?: string;
}

export class ScanClasses {
    private _rootDir: string = path.resolve('./');
    private _allStyles: AllStylesInterface = {};
    private _allArbitraryValues: string[] = [];
    private _styles: string[] = [];
    private _classes: Classes = {};
    private _arbitraryValues: Classes = {};

    get rootDir(): string {
        return this._rootDir;
    }

    set rootDir(value: string) {
        this._rootDir = value;
    }

    get allStyles(): AllStylesInterface {
        return this._allStyles;
    }

    private set allStyles(value: AllStylesInterface) {
        this._allStyles = value;
    }

    get styles(): string[] {
        return this._styles;
    }

    private set styles(value: string) {
        if (!this._styles.includes(value)) {
            this._styles.push(value);
        }
    }

    get classes(): Classes {
        return this._classes;
    }

    private set classes(value: Classes) {
        this._classes = value;
    }

    get allArbitraryValues(): string[] {
        return this._allArbitraryValues;
    }

    private set allArbitraryValues(value: string[]) {
        this._allArbitraryValues = value;
    }

    get arbitraryValues(): object {
        return this._arbitraryValues;
    }

    private set arbitraryValues(value: object) {
        Object.keys(value).map(key => {
            this._arbitraryValues[key] = value[key as keyof typeof value];
        });
    }

    loadFile(file: string) {
        try {
            return fs.readFileSync(file, 'utf8');
        } catch (err) {
            console.error(err);
        }
    }

    async isIgnoredByGit(filePath: string) {
        if (filePath.endsWith('.git') || filePath.endsWith('.github')) {
            return true;
        }

        try {
            const { stdout }: { stdout: string; stderr: string } = await new Promise((resolve, reject) => {
                exec(
                    `git check-ignore ${path.resolve(filePath)}`,
                    (error: ExecException | null, stdout: string, stderr: string) => {
                        if (error) {
                            if (error.code === 1) {
                                resolve({ stdout: '', stderr: '' });
                            } else {
                                reject(error);
                            }
                        } else {
                            resolve({ stdout, stderr });
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
    }

    async getDeepFiles(dir: string) {
        const files: string[] = [];

        if (fs.existsSync(dir)) {
            if (fs.statSync(dir).isDirectory()) {
                await Promise.all(
                    fs.readdirSync(dir).map(async (file: string) => {
                        const absolutePath = path.join(dir, file);
                        const isIgnored = await this.isIgnoredByGit(absolutePath);

                        if (!isIgnored) {
                            if (fs.statSync(absolutePath).isDirectory()) {
                                const deepFiles = await this.getDeepFiles(absolutePath);

                                deepFiles.map((subFile: string) => {
                                    files.push(subFile);
                                });
                            } else {
                                files.push(absolutePath);
                            }
                        }
                    }),
                );
            } else {
                files.push(dir);
            }
        }

        return files;
    }

    parseFile(content: string) {
        Object.keys(this.allStyles).map(style => {
            if (!style.includes(',')) {
                if (content.search(style) !== -1) {
                    this.styles = style;
                }
            }
        });

        Object.keys(this.allArbitraryValues).map((group: string) => {
            const arbitraryValue = this.allArbitraryValues[group as keyof typeof this.allArbitraryValues];

            Object.keys(arbitraryValue).map(index => {
                const rule = arbitraryValue[index as keyof typeof arbitraryValue];

                switch (true) {
                    case index.includes('<number>'): {
                        const regex = new RegExp(index.replace('<number>', '[0-9]'), 'gi');
                        const matched = content.match(regex);

                        if (matched) {
                            matched.map(matchedValue => {
                                this.arbitraryValues = {
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
                                    this.arbitraryValues = {
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
                                    this.arbitraryValues = {
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

                    default:
                        console.log(index);
                }
            });
        });
    }

    async init(): Promise<void> {
        try {
            const configClass: ConfigClass = new ConfigClass();

            await configClass.init();

            const source = configClass.getSource();
            const unregister = register();
            const indexStyles = await import(url.pathToFileURL('src/styles/index.ts').href);

            this.allStyles = indexStyles.styles;
            this.allArbitraryValues = indexStyles.arbitraryValues;

            unregister();

            if (source !== 'none') {
                if (source) {
                    this.rootDir = source as string;
                }

                const files: string[] = await this.getDeepFiles(this.rootDir);

                await Promise.all(
                    files.map(async (file: string) => {
                        const loadedFile = this.loadFile(file);

                        if (loadedFile) {
                            this.parseFile(loadedFile);
                        }
                    }),
                );
            }
        } catch (err: unknown) {
            const error: ErrnoException = err as ErrnoException;

            console.log(error);
        }
    }
}
