let apply = require('./declarations/apply');
let codemonster = require('./declarations/codemonster');

const plugin = () => {
    return {
        postcssPlugin: '${pluginName}',
        Once(root: any, { Rule }: any) {
            apply.create(root);
            codemonster.create(root, { Rule });
        },
    };
};

module.exports = plugin;
module.exports.postcss = true;