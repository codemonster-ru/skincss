import { Root, Rule } from 'postcss';
import styleBase from '@/styles/base';
import { camelToSnakeCase } from '@/utils/helper';

interface Property {
    [index: string]: string;
}

interface Style {
    [index: string]: Property;
}

export default (root: Root): void => {
    const styles: Style = styleBase;

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
};