type StyleValueType = string;

interface StyleType {
    [key: string]: StyleValueType;
}

interface StylesType {
    [key: string]: StyleType;
}

interface RawStylesType {
    [key: string]: StyleType | ArbitraryStylesType | undefined;
    arbitraryStyles?: ArbitraryStylesType | undefined;
}

interface GlobalStylesType {
    [key: string]: RawStylesType;
}

interface ArbitraryStyleType {
    [key: string]: StyleValueType;
}

interface ArbitraryStylesType {
    [key: string]: ArbitraryStyleType;
}

interface ProcessedStylesType {
    selector: string;
    value: StyleType | ArbitraryStyleType;
    minBreakpoint?: string | undefined;
    maxBreakpoint?: string | undefined;
}
