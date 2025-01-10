import { AtRule, Declaration, Root, Rule } from 'postcss';

const getDeclarationsForSelector = (selector: string, css: Root) => {
    const decls: Declaration[] = [];

    css.walkRules((rule: Rule): void => {
        const ruleHasSelector: boolean = rule.selectors.some((ruleSelector: string): boolean => {
            return ruleSelector === selector;
        });

        if (ruleHasSelector) {
            rule.walkDecls((decl: Declaration): void => {
                decls.push(decl);
            });
        }
    });

    return decls;
};

export default (root: Root): void => {
    root.walkAtRules('apply', (rule: AtRule): void => {


        const classes: string[] = rule.params.toString().replace(/\s/g, ' ').split(' ');

        classes.forEach((selector: string): void => {
            const decls: Declaration[] = getDeclarationsForSelector(`.${selector}`, rule.root());

            decls.forEach((decl: Declaration): void => {
                if (rule.parent !== undefined) {
                    rule.parent.append({
                        prop: decl.prop,
                        value: decl.value ?? '',
                        source: root.source,
                        important: decl.important,
                    });
                }
            });
        });

        rule.remove();
    });
};