import { Root, Rule } from 'postcss';
import styleBase from '@/styles/base';
import styleGrid from '@/styles/grid';
import styleSizing from '@/styles/sizing';
import styleLayout from '@/styles/layout';
import styleSpacing from '@/styles/spacing';
import styleTypography from '@/styles/typography';
import styleBackground from '@/styles/backgrounds';
import styleBorder from '@/styles/borders';
import styleEffect from '@/styles/effects';
import styleFilter from '@/styles/filters';
import styleTable from '@/styles/tables';
import styleTransition from '@/styles/transitions';
import styleTransform from '@/styles/transforms';
import styleInteractivity from '@/styles/interactivity';
import styleSvg from '@/styles/svg';
import styleAccessibility from '@/styles/accessibility';
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
    } else if (variant === 'sizing') {
        styles = styleSizing;
    } else if (variant === 'layout') {
        styles = styleLayout;
    } else if (variant === 'spacing') {
        styles = styleSpacing;
    } else if (variant === 'typography') {
        styles = styleTypography;
    } else if (variant === 'background') {
        styles = styleBackground;
    } else if (variant === 'border') {
        styles = styleBorder;
    } else if (variant === 'effect') {
        styles = styleEffect;
    } else if (variant === 'filter') {
        styles = styleFilter;
    } else if (variant === 'table') {
        styles = styleTable;
    } else if (variant === 'transition') {
        styles = styleTransition;
    } else if (variant === 'transform') {
        styles = styleTransform;
    } else if (variant === 'interactivity') {
        styles = styleInteractivity;
    } else if (variant === 'svg') {
        styles = styleSvg;
    } else if (variant === 'accessibility') {
        styles = styleAccessibility;
    } else {
        return;
    }

    if (configClass.needIncludeDeepStyles(variant)) {
        Object.keys(styles).forEach((key: string) => {
            const selector = variant === 'base' ? key : `.${key}`;
            const properties: Property = styles[key];
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
    }
};
