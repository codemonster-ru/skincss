let classes = require('./classes');
let apply = require('./apply');

const plugin = () => {
    return {
        postcssPlugin: '${pluginName}',
        Once(root: any, { Rule }: any) {
            classes.createClasses(root, { Rule });
            apply.createApply(root);
        },
    };
};

module.exports = plugin;
module.exports.postcss = true;