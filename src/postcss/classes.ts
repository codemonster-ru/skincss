import { Root, Rule } from 'postcss';
import { camelToSnakeCase } from '@/utils/helper.ts';
import { ScanClasses } from '@/utils/scan.ts';

interface Property {
    [index: string]: string;
}

export default async (root: Root, variant: string, scanClass: ScanClasses): Promise<void> => {
    if (variant !== 'all') {
        return;
    }

    Object.keys(scanClass.allStyles).forEach((key: string) => {
        if (scanClass.styles.includes(key)) {
            // const selector = variant === 'base' ? key : `.${key}`;
            const selector = `.${key}`;
            const properties: Property = scanClass.allStyles[key];
            const rule: Rule = new Rule({
                selector: selector,
                source: root.source,
            });

            Object.keys(properties).forEach((value: string, index: number) => {
                const prop: string = value.includes('-') ? value : camelToSnakeCase(value);
                let propValue: string = properties[value];

                if (index === Object.keys(properties).length - 1) {
                    propValue += ';';
                }

                rule.append({
                    prop: prop,
                    value: propValue,
                    source: root.source,
                });
            });

            root.append(rule);
        }
    });

    Object.keys(scanClass.arbitraryValues).map(key => {
        const selector = `.${key.replace('(', '\\(').replace(')', '\\)').replace('[', '\\[').replace(']', '\\]')}`;
        const properties: Property = scanClass.arbitraryValues[key as keyof typeof scanClass.arbitraryValues];
        const rule: Rule = new Rule({
            selector: selector,
            source: root.source,
        });

        Object.keys(properties).forEach((value: string, index: number) => {
            const prop: string = value.includes('-') ? value : camelToSnakeCase(value);
            let propValue: string = properties[value];

            if (index === Object.keys(properties).length - 1) {
                propValue += ';';
            }

            rule.append({
                prop: prop,
                value: propValue,
                source: root.source,
            });
        });

        root.append(rule);
    });
};
