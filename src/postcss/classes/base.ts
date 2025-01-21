import { Root, Rule } from 'postcss';
import styleBase from '@/styles/base';
import { camelToSnakeCase } from '@/utils/helper';
import { ConfigClass } from '@/utils/config';

interface Property {
    [index: string]: string;
}

interface Style {
    [index: string]: Property;
}

export default async (root: Root): Promise<void> => {
    const styles: Style = styleBase;
    const configClass: ConfigClass = new ConfigClass();

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