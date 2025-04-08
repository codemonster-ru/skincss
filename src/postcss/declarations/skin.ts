import { Root, AtRule, ChildNode } from 'postcss';
import base from '@/postcss/classes/base';

export default (root: Root): void => {
    root.walkAtRules('skin', (rule: AtRule): void => {
        const classes: string[] = rule.params.toString().split(' ');

        classes.forEach((selector: string): void => {
            if (selector === 'base') {
                base(root);
            }
        });

        const annotation: ChildNode | undefined = rule.prev();

        if (annotation !== undefined &&
            annotation.type === 'comment' &&
            annotation.text === 'noinspection CssInvalidAtRule') {
            annotation.remove();
        }

        rule.remove();
    });
};