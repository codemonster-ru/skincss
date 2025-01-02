let postcss = require('postcss');

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

module.exports = (opts = {}) => {
    return {
        postcssPlugin: '${pluginName}',
        Once(root: { walkAtRules: (arg0: string, arg1: (rule: any) => void) => void; source: any; }) {
            root.walkAtRules('apply', (rule) => {
                const classes = rule.params.toString().replace(/\s/g, " ").split(" ");

                classes.forEach((selector: any) => {
                    const decls = getDeclarationsForSelector(`.${selector}`, rule.root());

                    decls.forEach(decl => {
                        const astNode = postcss.decl({
                            prop: decl.prop,
                            value: decl.value ?? '',
                            important: decl.important
                        });
                        astNode.source = root.source;

                        rule.parent.append(astNode);
                    });
                });

                rule.remove();
            });
        }
    };
};

module.exports.postcss = true;