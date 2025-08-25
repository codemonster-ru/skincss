import { prepareAttribute } from './helper';

const getPattern = (breakpoints: string, styles: string) => {
    return `((?<!:)|${breakpoints})(\\b${styles.replaceAll(/[/]/g, '\\$&')}\\b)`;
};

export default class PatternClass {
    private _styles: string = '';
    private _breakpoints: string = '';
    private _arbitraryStyles: string = '';

    get styles(): string {
        return this._styles;
    }

    set styles(value: string) {
        this._styles = value;
    }

    get breakpoints(): string {
        return this._breakpoints;
    }

    set breakpoints(value: string) {
        this._breakpoints = value;
    }

    get arbitraryStyles(): string {
        return this._arbitraryStyles;
    }

    set arbitraryStyles(value: string) {
        this._arbitraryStyles = value;
    }

    constructor(params: PatternParamsType) {
        let breakpoints = '';
        let styles = '';
        let arbitraryStyles = '';

        Object.keys(params.breakpoints).map((minBreakpoint: string, minBreakpointIndex: number) => {
            let not = '';

            Object.keys(params.breakpoints).map((maxBreakpoint: string, maxBreakpointIndex: number) => {
                if (minBreakpointIndex < maxBreakpointIndex) {
                    not += not ? '|' : '';
                    not += `(max-${maxBreakpoint}:)`;

                    breakpoints += breakpoints ? '|' : '';
                    breakpoints += `(${minBreakpoint}:max-${maxBreakpoint}:)`;
                }
            });

            breakpoints += breakpoints ? '|' : '';

            if (not.length) {
                breakpoints += `(${minBreakpoint}:(?!${not}))`;
            } else {
                breakpoints += `(${minBreakpoint}:)`;
            }
        });

        Object.keys(params.styles).map((index: string) => {
            styles += styles ? '|' : '';
            styles += index;
        });

        Object.keys(params.arbitraryStyles).map((index: string) => {
            arbitraryStyles += arbitraryStyles ? '|' : '';
            arbitraryStyles += prepareAttribute(index);
        });

        this.styles = getPattern(breakpoints, styles);
        this.breakpoints = breakpoints;
        this.arbitraryStyles = getPattern(breakpoints, arbitraryStyles);
    }
}
