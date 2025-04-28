import theme from '@/themes/default';

interface Styles {
    [key: string]: boolean | undefined;

    base?: boolean;
}

export interface Config {
    [key: string]: object | undefined;

    styles?: Styles;
}

export class ThemeClass {
    private _config: Config = {};

    get config(): Config {
        return this._config;
    }

    private set config(value: Config) {
        this._config = value;
    }

    private vars: object = {
        animation: 'animate',
        aspectRatio: 'aspect',
        borderRadius: 'radius',
        boxShadow: 'shadow',
        colors: 'color',
        containers: 'container',
        fontFamily: 'font',
        fontSize: 'text',
        letterSpacing: 'tracking',
        lineHeight: 'leading',
        maxWidth: 'container',
        screens: 'breakpoint',
        transitionTimingFunction: 'ease',
    };

    init(): void {
        this.loadDefaultConfig();
    }

    getVars(): Config {
        const vars: Config = {};

        Object.keys(this.config).forEach((index: string) => {
            if (this.vars[index as keyof object] !== undefined) {
                vars[index as keyof object] = this.config[index];
            } else if (index === 'spacing') {
                vars[index as keyof object] = this.config[index as keyof object]!['1' as keyof object];
            }
        });

        return vars;
    }

    getShortName(property: string): string {
        return this.vars[property as keyof object] !== undefined ? this.vars[property as keyof object] : property;
    }

    loadDefaultConfig(): void {
        this.config = theme;
    }
}
