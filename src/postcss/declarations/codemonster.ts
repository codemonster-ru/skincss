let base = require('../classes/base');

const createCodemonster = (root: any, { Rule }: any) => {
    root.walkAtRules('codemonster', (rule: any) => {
        const classes = rule.params.toString().split(" ");

        classes.forEach((selector: any) => {
            if (selector === 'base') {
                base.createClasses(root, { Rule });
            }
        });

        const annotation = rule.prev();

        if (annotation.type === 'comment' && annotation.text === 'noinspection CssInvalidAtRule') {
            annotation.remove();
        }

        rule.remove();
    });
};

exports.create = createCodemonster;