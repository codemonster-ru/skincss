import './assets/main.css';

window.addEventListener(
    'DOMContentLoaded',
    () => {
        let app: HTMLElement | null = document.querySelector('#app');

        if (app) {
            const styleSheets: StyleSheetList = document.styleSheets;

            Object.keys(styleSheets).map((indexSheetList: string) => {
                const cssStyleSheet: CSSStyleSheet = styleSheets[
                    indexSheetList as keyof typeof styleSheets
                ] as CSSStyleSheet;
                const cssRules: CSSRuleList = cssStyleSheet.cssRules;

                Object.keys(cssRules).map((indexCssRuleList: string) => {
                    const rule = cssRules[indexCssRuleList as keyof typeof cssRules];

                    if (rule instanceof CSSRule) {
                        app.innerHTML += `${rule.cssText!}<br>`;
                    }
                });
            });
        }
    },
    false,
);
