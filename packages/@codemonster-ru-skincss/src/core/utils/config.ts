export default class ConfigClass {
    private _base: string = '';
    private _enable: boolean = false;
    private _baseSource: string = '';
    private _explicitlySources: string[] = [];
    private _ignoredSources: string[] = [];

    get base(): string {
        return this._base;
    }

    set base(value: string) {
        this._base = value;
    }

    get enable(): boolean {
        return this._enable;
    }

    set enable(value: boolean) {
        this._enable = value;
    }

    get baseSource(): string {
        return this._baseSource;
    }

    set baseSource(value: string) {
        this._baseSource = value;
    }

    get explicitlySources(): string[] {
        return this._explicitlySources;
    }

    set explicitlySources(value: string[]) {
        this._explicitlySources = value;
    }

    get ignoredSources(): string[] {
        return this._ignoredSources;
    }

    set ignoredSources(value: string[]) {
        this._ignoredSources = value;
    }
}
