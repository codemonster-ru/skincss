import { Root, Rule } from 'postcss';
import { ThemeClass } from '@/utils/theme';

export default (root: Root): void => {
    const themeClass: ThemeClass = new ThemeClass();

    themeClass.init();

    const rule: Rule = new Rule({
        selector: ':root',
        source: root.source,
    });

    const ruleString = (property: string, value: string) => {
        rule.append({
            prop: property,
            value: value,
            source: root.source,
        });
    };

    const ruleArray = (property: string, value: string[]) => {
        rule.append({
            prop: property,
            value: (value as string[]).toString(),
            source: root.source,
        });
    };

    const ruleObject = (parameter: object, property: string, parentProperty: string = '') => {
        Object.keys(parameter).forEach((index: string) => {
            const subParameter = parameter[index as keyof object];
            const calcProperty = parentProperty
                ? `${parentProperty}-${index}`
                : `--${themeClass.getShortName(property)}-${index}`;

            if (typeof subParameter === 'string') {
                ruleString(calcProperty, subParameter);
            } else if (Array.isArray(subParameter)) {
                ruleArray(calcProperty, subParameter);
            } else if (typeof subParameter === 'object') {
                ruleObject(subParameter, index, calcProperty);
            }
        });
    };

    const ruleFunction = (property: string, parent: string, fn: () => { [key: string]: string }) => {
        const parameter = fn();

        if (typeof parameter === 'string') {
            ruleString(property, parameter);
        } else if (typeof parameter === 'object') {
            ruleObject(parameter, parent);
        }
    };

    Object.keys(themeClass.getVars()).forEach((key: string) => {
        const parameter = themeClass.getVars()[key as keyof object];

        if (typeof parameter === 'string') {
            ruleString(`--${themeClass.getShortName(key)}`, parameter);
        } else if (typeof parameter === 'object') {
            ruleObject(parameter, key);
        } else if (typeof parameter === 'function') {
            ruleFunction(`--${themeClass.getShortName(key)}`, key, parameter as () => { [key: string]: string });
        }
    });

    root.append(rule);
};
