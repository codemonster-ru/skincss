const fs = require('fs');
const url = require('url');
const path = require('path');

interface Styles {
    [key: string]: boolean | undefined;

    base?: boolean;
}

export interface Config {
    [key: string]: object | undefined;

    styles?: Styles;
}

declare interface ErrnoException extends Error {
    code?: string;
}

export class ConfigClass {
    private _config: Config = {};

    get config(): Config {
        return this._config;
    }

    private set config(value: Config) {
        this._config = value;
    }

    async loadFile(file: string, rootDir: string) {
        if (['.ts', '.cts', '.mts'].includes(path.parse(file).ext)) {
            throw new Error("Can't load skincss.config! ts extension is temporarily unsupported. Use js.");
        }

        const filename: string = path.join(rootDir, file);
        const filePath: string = url.pathToFileURL(filename).href;

        return await import(filePath);
    }

    async init(): Promise<void> {
        try {
            const rootDir: string = path.resolve('./');
            const rootFiles: string[] = fs.readdirSync(rootDir);

            await Promise.all(
                rootFiles.map(async (file: string): Promise<void> => {
                    switch (file) {
                        case 'skincss.config.js':
                        case 'skincss.config.cjs':
                        case 'skincss.config.mjs':
                        case 'skincss.config.ts':
                        case 'skincss.config.cts':
                        case 'skincss.config.mts':
                            this.config = await this.loadFile(file, rootDir);
                            this.config = this.config.default as Config;

                            break;
                    }
                }),
            );
        } catch (err: unknown) {
            const error: ErrnoException = err as ErrnoException;

            if (error.code === 'ERR_MODULE_NOT_FOUND') {
                console.log("Can't load skincss.config!");
            } else {
                console.log(error);
            }
        }
    }

    hasProperty(property: string, object: Config | Styles = this.config): boolean {
        return object[property as keyof Config] !== undefined;
    }

    hasDeepProperty(property: string): boolean {
        let result: boolean = false;
        const keys: string[] = property.split('.');
        let object: Config | Styles = this.config;

        keys.map((key: string): void => {
            if (this.hasProperty(key, object)) {
                result = true;

                if (typeof object[key] !== 'boolean') {
                    object = object[key] as Config | Styles;
                }
            } else {
                result = false;

                return;
            }
        });

        return result;
    }
}
