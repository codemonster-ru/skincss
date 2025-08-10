import ts from 'typescript';

export const findVar = (text: string, wordToFind: string) => {
    const escapedWord = wordToFind.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`var\\(${escapedWord}\\)`, 'i');

    return regex.test(text);
};
export const findWholeWord = (text: string, wordToFind: string) => {
    const escapedWord = wordToFind.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(?<!:)${escapedWord}\\b`, 'i');

    return regex.test(text);
};
export const transpileTsToJs = (sourceCode: string, options: ts.TranspileOptions = {}): string => {
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
export const camelToSnakeCase = (string: string) => string.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
export const deepMerge = <T extends object>(target: T, source: Partial<T>): T => {
    if (target !== null && source !== null) {
        if (Array.isArray(target) && Array.isArray(source)) {
            target = target.concat(source) as T;
        } else if (!Array.isArray(target) && !Array.isArray(source)) {
            for (const key in source) {
                if (source.hasOwnProperty(key)) {
                    if (
                        typeof source[key] === 'object' &&
                        source[key] !== null &&
                        !Array.isArray(source[key]) &&
                        typeof target[key] === 'object' &&
                        target[key] !== null &&
                        !Array.isArray(target[key])
                    ) {
                        deepMerge(target[key] as object, source[key] as object);
                    } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
                        (target as any)[key] = [...(target as any)[key], ...(source as any)[key]];
                    } else {
                        (target as any)[key] = source[key];
                    }
                }
            }
        }
    }

    return target;
};
