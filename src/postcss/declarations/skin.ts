import connectionClasses from '@/postcss/classes';
import { Root, AtRule, ChildNode } from 'postcss';

export default (root: Root): void => {
    root.walkAtRules('skin', (rule: AtRule): void => {
        const classes: string[] = rule.params.toString().split(' ');
        const annotation: ChildNode | undefined = rule.prev();

        classes.forEach((selector: string): void => {
            connectionClasses(root, selector);
        });

        if (
            annotation !== undefined &&
            annotation.type === 'comment' &&
            annotation.text === 'noinspection CssInvalidAtRule'
        ) {
            annotation.remove();
        }

        rule.remove();
    });
};
