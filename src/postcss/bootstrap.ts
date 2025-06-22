import { Root } from 'postcss';
import { ScanClasses } from '@/utils/scan.ts';
import skin from '@/postcss/declarations/skin.ts';
import theme from '@/postcss/declarations/theme.ts';
import apply from '@/postcss/declarations/apply.ts';

const plugin = (): { Once: (root: Root) => void; postcssPlugin: string } => {
    return {
        postcssPlugin: 'skincss',
        async Once(root: Root): Promise<void> {
            const scanClasses: ScanClasses = new ScanClasses();

            await scanClasses.init();

            await skin(root, scanClasses);
            theme(root);
            apply(root);
        },
    };
};

plugin.postcss = true;

export default plugin;
