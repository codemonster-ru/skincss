import { Root } from 'postcss';
import { ScanClasses } from '@/utils/scan';
import skin from '@/postcss/declarations/skin';
import theme from '@/postcss/declarations/theme';
import apply from '@/postcss/declarations/apply';

const plugin = (): { Once: (root: Root) => void; postcssPlugin: string } => {
    return {
        postcssPlugin: 'skincss',
        async Once(root: Root): Promise<void> {
            const scanClasses: ScanClasses = new ScanClasses();

            await scanClasses.init();

            await skin(root, scanClasses.styles);
            theme(root);
            apply(root);
        },
    };
};

plugin.postcss = true;

export default plugin;
