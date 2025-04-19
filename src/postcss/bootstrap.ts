import { Root } from 'postcss';
import skin from '@/postcss/declarations/skin';
import apply from '@/postcss/declarations/apply';

const plugin = (): { Once: (root: Root) => void, postcssPlugin: string } => {
    return {
        postcssPlugin: 'skincss',
        'Once'(root: Root): void {
            apply(root);
            skin(root);
        },
    };
};

plugin.postcss = true;

export default plugin;