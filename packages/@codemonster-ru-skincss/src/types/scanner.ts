interface arbitraryStylesType {
    [key: string]: object;
}

interface StylesType {
    [key: string]: object;
}

interface breakpointStylesType {
    [key: string]: string[];
}

interface breakpointArbitraryStylesType {
    [key: string]: arbitraryStylesType;
}

interface ScanResult {
    styles: string[];
    breakpointStyles: breakpointStylesType;
    arbitraryStyles: arbitraryStylesType;
    breakpointArbitraryStyles: breakpointArbitraryStylesType;
}
