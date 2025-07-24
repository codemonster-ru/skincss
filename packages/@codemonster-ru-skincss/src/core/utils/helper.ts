import ts from 'typescript';

const transpileTsToJs = (sourceCode: string, options: ts.TranspileOptions = {}): string => {
    if (Object.keys(options).length === 0) {
        options = {
            compilerOptions: {
                module: ts.ModuleKind.ES2020,
                moduleResolution: ts.ModuleResolutionKind.NodeNext,
            },
        };
    }
    const result = ts.transpileModule(sourceCode, options);
    return result.outputText;
};
const camelToSnakeCase = (string: string) => string.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

export { transpileTsToJs, camelToSnakeCase };
