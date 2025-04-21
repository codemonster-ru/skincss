import { Root, Rule } from 'postcss';
import styleBase from '@/styles/base';
import styleGrid from '@/styles/grid';
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
    const configClass: ConfigClass = new ConfigClass();

    await configClass.init();

    let styles: Style;

    if (variant === 'base') {
        styles = styleBase;
    } else if (variant === 'grid') {
        styles = styleGrid;
    } else if (variant === 'layout') {
        styles = styleLayout;
    } else {
        return;
    }

    if (configClass.needIncludeDeepStyles(variant)) {
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
