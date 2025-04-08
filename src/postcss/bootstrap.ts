import { Root } from 'postcss';
import apply from '@/postcss/declarations/apply';
import skin from '@/postcss/declarations/skin';

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