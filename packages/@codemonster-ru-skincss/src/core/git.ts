import path from 'path';
import { promisify } from 'util';
import ConfigClass from './config';
import { exec as execCb } from 'child_process';

const exec = promisify(execCb);

export default class GitClass {
    private _ignored: string[] = [];

    get ignored(): string[] {
        return this._ignored;
    }

    set ignored(value: string[]) {
        this._ignored = value;
    }

    async init(config: ConfigClass) {
        try {
            const { stdout, stderr } = await exec('git ls-files --others -i --exclude-standard');

            this.ignored = stdout
                .trim()
                .replace(/\\\\/g, '\\')
                .split('\n')
                .filter(Boolean)
                .map(file => path.normalize(`${config.baseSource}\\${file}`));

            if (stderr) {
                console.error(`stderr: ${stderr}`);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(`Error executing command: ${error.message}`);
            } else {
                console.error('Caught an unknown error:', error);
            }
        }
    }
}
