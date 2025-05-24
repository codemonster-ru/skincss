import styles from '@/styles';

const fs = require('fs');
const url = require('url');
const path = require('path');
const { exec } = require('child_process');

export interface Classes {
    [key: string]: string;
}

declare interface ErrnoException extends Error {
    code?: string;
}

export class ScanClasses {
    private _rootDir: string = path.resolve('./');
    private _styles: string[] = [];
    private _classes: Classes = {};

    get rootDir(): string {
        return this._rootDir;
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
                    (error: { code: number }, stdout: string, stderr: string) => {
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

        return files;
    }

    parseFile(content: string) {
        Object.keys(styles)
            .filter(x => !x.includes(','))
            .map(style => {
                if (content.search(style) !== -1) {
                    this.styles = style;
                }
            });
    }

    async init(): Promise<void> {
        try {
            const files: string[] = await this.getDeepFiles(this.rootDir);

            await Promise.all(
                files.map(async (file: string) => {
                    this.parseFile(this.loadFile(file));
                }),
            );
        } catch (err: unknown) {
            const error: ErrnoException = err as ErrnoException;

            console.log(error);
        }
    }
}
