import fs from 'fs';
import url from 'url';
import path from 'path';
import process from 'process';

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

    async init(): Promise<void> {
        try {
            const rootDir: string = process.cwd();
            const rootFiles: string[] = fs.readdirSync(rootDir);

            rootFiles.map(async (file: string): Promise<void> => {
                const filename: string = path.join(rootDir, file);
                const filePath: string = url.pathToFileURL(filename).href;

                switch (file) {
                case 'monstercss.config.ts':
                case 'monstercss.config.js':
                    this.config = await require(filePath).default as Config;
                    break;
                }
            });
        } catch (err: unknown) {
            const error: ErrnoException = err as ErrnoException;

            if (error.code === 'ERR_MODULE_NOT_FOUND') {
                console.log('Can\'t load monstercss.config!');
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

    needIncludeDeepStyles(): boolean {
        return this.hasDeepProperty('styles.base') ? this.config.styles?.base === true : true;
    }
}