import connectionClasses from '@/postcss/classes';
import { Root, AtRule, ChildNode } from 'postcss';

export default async (root: Root, styles: string[]): Promise<void> => {
    const classes: string[] = [];

    root.walkAtRules('skin', (rule: AtRule) => {
        classes.push(rule.params.toString());

        const annotation: ChildNode | undefined = rule.prev();

        if (
            annotation !== undefined &&
            annotation.type === 'comment' &&
            annotation.text === 'noinspection CssInvalidAtRule'
        ) {
            annotation.remove();
        }

        rule.remove();
    });

    await Promise.all(
        classes.map(async (selector: string): Promise<void> => {
            await connectionClasses(root, selector, styles);
        }),
    );
};
