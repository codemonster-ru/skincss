const getDeclarationsForSelector = (selector: string, css: { walkRules: (arg0: (rule: any) => void) => void; }) => {
    const decls: any[] = [];

    css.walkRules(rule => {
        let ruleHasSelector = rule.selectors.some((ruleSelector: string) => {
            return ruleSelector === selector;
        });

        if (ruleHasSelector) {
            rule.walkDecls((decl: any) => {
                decls.push(decl);
            });
        }
    });

    return decls;
};

const createApply = (root: any) => {
    root.walkAtRules('apply', (rule: any) => {
        const classes = rule.params.toString().replace(/\s/g, " ").split(" ");

        classes.forEach((selector: any) => {
            const decls = getDeclarationsForSelector(`.${selector}`, rule.root());

            decls.forEach(decl => {
                rule.parent.append({
                    prop: decl.prop,
                    value: decl.value ?? '',
                    source: root.source,
                    important: decl.important
                });
            });
        });

        rule.remove();
    });
};

exports.createApply = createApply;