import { Root, Rule } from 'postcss';
import styleBase from '@/styles/base';
import styleLayout from '@/styles/layout';
import { ConfigClass } from '@/utils/config';
import { camelToSnakeCase } from '@/utils/helper';

interface Property {
    [index: string]: string;
}

interface Style {
    [index: string]: Property;
}

export default async (root: Root, variant: string): Promise<void> => {
    let styles: Style;
    const configClass: ConfigClass = new ConfigClass();

    if (variant === 'base') {
        styles = styleBase;
    } else if (variant === 'layout') {
        styles = styleLayout;
    } else {
        return;
    }

    await configClass.init();

    if (configClass.needIncludeDeepStyles()) {
        Object.keys(styles).forEach((key: string) => {
            const properties: Property = styles[key];
            const rule: Rule = new Rule({
                selector: key,
                source: root.source,
            });

            Object.keys(properties).forEach((index: string) => {
                const property: string = properties[index];

                rule.append({
                    prop: camelToSnakeCase(index),
                    value: property,
                    source: root.source,
                });
            });

            root.append(rule);
        });
    }
};
