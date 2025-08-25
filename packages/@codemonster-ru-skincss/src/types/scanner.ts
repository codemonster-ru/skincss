interface ScanFileResult {
    styles: string[];
    arbitraryStyles: string[];
}

interface ScannerStylesType {
    styles: string;
    arbitraryStyles: string;
    ignored: string[];
    config: import('../core/config.ts').default;
}
