import ThemeClass from './theme';
import { version } from '../../package.json';
import { camelToSnakeCase, findVar } from './helper';
import {
    commentedRegex,
    deleteExplicitlySourceRegex,
    deleteIgnoredSourceRegex,
    importRegex,
} from '../patterns/scanner';

export default class CssClass {
    private _code: string = '';

    get code(): string {
        return this._code;
    }

    set code(code: string) {
        this._code = code;
    }

    getClassCss = (realClass: ProcessedStylesType, spaces: string = '') => {
        let css = '';
        const properties = realClass.value;
        const selector = `.${realClass.selector.replace(/[*+?^${}()|[\]\\]/g, '\\$&')}`;

        css += `${spaces}${selector} {\n`;

        Object.keys(properties).forEach((value: string) => {
            const prop: string = value.includes('-') ? value : camelToSnakeCase(value);
            const propValue = properties[value as keyof typeof properties];

            css += `${spaces}    ${prop}: ${propValue};\n`;
        });

        css += `${spaces}}\n`;

        return css;
    };

    getCss = (realClasses: ProcessedStylesType[], theme: ThemeClass) => {
        let css = '';

        const styles = realClasses.filter((value: ProcessedStylesType) => !value.minBreakpoint && !value.maxBreakpoint);

        if (styles) {
            styles.map((value: ProcessedStylesType) => {
                css += `${this.getClassCss(value)}\n`;
            });
        }

        const breakpointStyles = realClasses.filter((value: ProcessedStylesType) => value.minBreakpoint);

        if (breakpointStyles) {
            const breakpointCss: {
                [key: string]: string[];
            } = {};

            breakpointStyles.map((value: ProcessedStylesType) => {
                let key = value.minBreakpoint;

                if (value.maxBreakpoint) {
                    key += `:${value.maxBreakpoint}`;
                }

                if (!breakpointCss[key!]) {
                    breakpointCss[key!] = [];
                }

                const classCss = this.getClassCss(value, '    ');

                breakpointCss[key!].push(classCss);
            });

            Object.keys(breakpointCss).map((breakpoint: string, breakpointIndex: number) => {
                let min = '';
                let max = '';

                if (breakpoint.indexOf(':') !== -1) {
                    const range = breakpoint.split(':');

                    if (range[0] !== 'undefined') {
                        min = range[0];
                    }

                    if (range[1] !== 'undefined') {
                        max = range[1];
                    }
                } else {
                    min = breakpoint;
                }

                if (min.length) {
                    min = theme.breakpoints[min];
                }

                if (max.length) {
                    max = theme.breakpoints[max];
                }

                if (min.length && !max.length) {
                    css += `@media (width >= ${min}) {\n`;
                } else if (!min.length && max.length) {
                    css += `@media (width < ${max}) {\n`;
                } else {
                    css += `@media (width >= ${min}) and (width < ${max}) {\n`;
                }

                breakpointCss[breakpoint].map((value: string, valueIndex: number) => {
                    css += value;

                    if (valueIndex !== breakpointCss[breakpoint].length - 1) {
                        css += '\n';
                    }
                });

                css += '}\n';

                if (breakpointIndex !== Object.keys(breakpointCss).length - 1) {
                    css += '\n';
                }
            });
        }

        return css;
    };

    getVarCss = (css: string, theme: ThemeClass) => {
        let varCss = '';
        const vars = theme.getVars();

        Object.keys(vars).map((themeIndex: string) => {
            if (findVar(css, themeIndex)) {
                varCss += `    ${themeIndex}: ${vars[themeIndex as keyof typeof vars]};\n`;
            }
        });

        return varCss;
    };

    applyCss(realClasses: ProcessedStylesType[], code: string, theme: ThemeClass) {
        const replaced = [...code.matchAll(importRegex)];

        if (replaced) {
            let css = this.getCss(realClasses, theme);

            if (css) {
                const varCss = this.getVarCss(css, theme);

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

        this.code = code;
    }
}
