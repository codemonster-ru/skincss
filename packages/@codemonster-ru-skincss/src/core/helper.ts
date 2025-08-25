import path from 'path';

export const findVar = (text: string, wordToFind: string) => {
    const escapedWord = wordToFind.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`var\\(${escapedWord}\\)`, 'i');

    return regex.test(text);
};
export const deepMerge = <T extends object>(target: T, ...sources: Partial<T>[]): T => {
    if (target !== null && sources !== null) {
        sources.map((source: Partial<T>) => {
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
        });
    }

    return target;
};
export const getRegexes = (text: string) => {
    const regex = new RegExp('<\\w+>', 'g');

    return [...text.matchAll(regex)];
};
export const getExtension = (filePath: string) => {
    const [fileName] = filePath.split('?', 2);

    return path.extname(fileName).slice(1);
};
export const findWholeWords = (text: string, pattern: string) => {
    const regex = new RegExp(pattern, 'g');

    return [...text.matchAll(regex)];
};
export const camelToSnakeCase = (string: string) => string.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
export const prepareAttribute = (attribute: string): string => {
    return attribute.replace(/<\w+>/g, '[a-z0-9]+');
};
