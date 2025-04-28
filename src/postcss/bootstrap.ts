import { Root } from 'postcss';
import skin from '@/postcss/declarations/skin';
import theme from '@/postcss/declarations/theme';
import apply from '@/postcss/declarations/apply';

const plugin = (): { Once: (root: Root) => void, postcssPlugin: string } => {
    return {
        postcssPlugin: 'skincss',
        async 'Once'(root: Root): Promise<void> {
            await skin(root);
            theme(root);
            apply(root);
        },
    };
};

plugin.postcss = true;

export default plugin;