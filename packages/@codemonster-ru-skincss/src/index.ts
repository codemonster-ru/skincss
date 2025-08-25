import './index.css';
import CssClass from './core/css';
import GitClass from './core/git';
import ThemeClass from './core/theme';
import StyleClass from './core/style';
import ConfigClass from './core/config';
import ScannerClass from './core/scanner';
import PatternClass from './core/pattern';

const config = new ConfigClass();
const scanner = new ScannerClass();

export const setBase = (path: string) => (config.base = path);
export const bootstrap = async (code: string, id: string) => {
    if (await scanner.isDetermineSource(code, config, id)) {
        const css = new CssClass();
        const git = new GitClass();
        const theme = new ThemeClass();
        const style = new StyleClass();
        const pattern = new PatternClass({
            styles: style.styles,
            arbitraryStyles: style.arbitraryStyles,
            breakpoints: theme.breakpoints,
        });

        await git.init(config);
        await scanner.init({
            styles: pattern.styles,
            arbitraryStyles: pattern.arbitraryStyles,
            ignored: git.ignored,
            config: config,
        });

        style.processStyles(scanner.foundStyles, pattern.breakpoints);
        css.applyCss(style.processedStyles, code, theme);

        return { code: css.code, files: scanner.files };
    }
};
export const refresh = () => (config.enable = false);
