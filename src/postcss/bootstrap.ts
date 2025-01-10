import { Root } from 'postcss';
import apply from '@/postcss/declarations/apply';
import codemonster from '@/postcss/declarations/codemonster';

const plugin = (): { Once: (root: Root) => void, postcssPlugin: string } => {
    return {
        postcssPlugin: 'bootstrap',
        'Once'(root: Root): void {
            apply(root);
            codemonster(root);
        },
    };
};

plugin.postcss = true;

export default plugin;