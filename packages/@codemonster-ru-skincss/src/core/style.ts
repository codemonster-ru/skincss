import baseStyles from '../styles/base';
import * as globalStyles from '../styles';
import { getRegexes, prepareAttribute } from './helper';

export default class StyleClass {
    private _styles: StylesType = {};
    private _baseStyles: StylesType = baseStyles;
    private _arbitraryStyles: ArbitraryStylesType = {};
    private _processedStyles: ProcessedStylesType[] = [];

    get styles(): StylesType {
        return this._styles;
    }

    set styles(obj: StylesType) {
        Object.assign(this.styles, obj);
    }

    get baseStyles(): StylesType {
        return this._baseStyles;
    }

    get arbitraryStyles(): ArbitraryStylesType {
        return this._arbitraryStyles;
    }

    set arbitraryStyles(obj: ArbitraryStylesType) {
        Object.assign(this._arbitraryStyles, obj);
    }

    get processedStyles(): ProcessedStylesType[] {
        return this._processedStyles;
    }

    set processedStyles(obj: ProcessedStylesType[]) {
        this._processedStyles = obj;
    }

    constructor() {
        const allStyles: RawStylesType = globalStyles.default;

        if (allStyles.arbitraryStyles) {
            this.arbitraryStyles = allStyles.arbitraryStyles;

            delete allStyles.arbitraryStyles;
        }

        this.styles = allStyles as StylesType;
    }

    processStyles = (foundClasses: ScanFileResult, breakpointPattern: string) => {
        let classes: ProcessedStylesType[] = [];
        const breakpointRegex = new RegExp(`^${breakpointPattern}$`, 'g');

        foundClasses.styles.map((foundClass: string) => {
            let lastIndex = foundClass.lastIndexOf(':');
            const purifiedSelector = lastIndex !== -1 ? foundClass.substring(lastIndex + 1) : foundClass;
            const properties = this.styles[purifiedSelector];

            if (properties) {
                const breakpoints = foundClass.match(breakpointRegex);
                let minBreakpoint = undefined;
                let maxBreakpoint = undefined;

                if (breakpoints) {
                    const firstBreakpointIndex = breakpoints[0].indexOf(':');
                    const lastBreakpointIndex = breakpoints[0].lastIndexOf(':');

                    minBreakpoint = foundClass.substring(0, firstBreakpointIndex);

                    if (firstBreakpointIndex !== lastBreakpointIndex) {
                        maxBreakpoint = foundClass
                            .substring(firstBreakpointIndex + 1, lastBreakpointIndex)
                            .replace('max-', '');
                    }
                }

                classes.push({
                    selector: purifiedSelector,
                    value: properties,
                    minBreakpoint: minBreakpoint,
                    maxBreakpoint: maxBreakpoint,
                });
            }
        });

        foundClasses.arbitraryStyles.map((foundClass: string) => {
            Object.keys(this.arbitraryStyles).map((key: string) => {
                let lastIndex = foundClass.lastIndexOf(':');
                const purifiedSelector = lastIndex !== -1 ? foundClass.substring(lastIndex + 1) : foundClass;

                if (new RegExp(prepareAttribute(key), 'g').test(purifiedSelector)) {
                    const regexes = getRegexes(key);
                    const properties = JSON.parse(JSON.stringify(this.arbitraryStyles[key]));
                    const breakpoints = foundClass.match(breakpointRegex);
                    let minBreakpoint = undefined;
                    let maxBreakpoint = undefined;

                    if (breakpoints) {
                        const firstBreakpointIndex = breakpoints[0].indexOf(':');
                        const lastBreakpointIndex = breakpoints[0].lastIndexOf(':');

                        minBreakpoint = foundClass.substring(0, firstBreakpointIndex);

                        if (firstBreakpointIndex !== lastBreakpointIndex) {
                            maxBreakpoint = foundClass
                                .substring(firstBreakpointIndex + 1, lastBreakpointIndex)
                                .replace('max-', '');
                        }
                    }

                    Object.keys(properties).map((property: string) => {
                        regexes.map(pattern => {
                            const regex = prepareAttribute(pattern[0]);
                            const matchValue = purifiedSelector.match(regex);

                            if (matchValue) {
                                properties[property] = properties[property].replace(pattern[0], matchValue[0]);
                            }
                        });
                    });

                    classes.push({
                        selector: purifiedSelector,
                        value: properties,
                        minBreakpoint: minBreakpoint,
                        maxBreakpoint: maxBreakpoint,
                    });
                }
            });
        });

        this.processedStyles = classes;
    };
}
