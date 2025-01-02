let postcss = require('postcss');

const getDeclarationsForSelector = (selector, css) => {
    const decls = [];

    css.walkRules(rule => {
        let ruleHasSelector = rule.selectors.some(ruleSelector => {
            return ruleSelector === selector;
        });

        if (ruleHasSelector) {
            rule.walkDecls(decl => {
                decls.push(decl);
            });
        }
    });

    return decls;
};

module.exports = (opts = {}) => {
    return {
        postcssPlugin: '${pluginName}',
        Once(root) {
            root.walkAtRules('apply', (rule) => {
                const classes = rule.params.toString().replace(/\s/g, " ").split(" ");

                classes.forEach(selector => {
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