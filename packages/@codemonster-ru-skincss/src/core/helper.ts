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
    const regex = new RegExp('\\[?<\\w+>\\]?', 'g');

    return [...text.matchAll(regex)];
};
export const removeParentheses = (text: string) => {
    if (text.startsWith('[') && text.endsWith(']')) {
        text = text.slice(1, -1);
    }

    return text;
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
export const escapeAttribute = (attribute: string): string => {
    return attribute.replace(/[()|[\]\/]/g, '\\$&');
};
export const prepareAttribute = (attribute: string): string => {
    const units = '\\d+(\\.\\d+)?\\s*(cm|mm|in|px|pt|em|rem|vh|vw|%)?';
    const cursor =
        'auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|grab|grabbing|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out';
    const percentage = '\\d+(\\.\\d+)?%';

    attribute = escapeAttribute(attribute);

    if (attribute.indexOf('<variable>') !== -1) {
        attribute = attribute.replace('<variable>', '--[^\\,\\:\\)]+');
    }

    if (attribute.indexOf('<color>') !== -1) {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

        // HEX
        const pattern = '#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?';

        attribute = attribute.replace('<color>', pattern);
    }

    if (attribute.indexOf('<angle>') !== -1) {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/angle

        attribute = attribute.replace('<angle>', '-?\\d+(\\.\\d+)?(deg|grad|rad|turn)');
    }

    if (attribute.indexOf('<percentage>') !== -1) {
        attribute = attribute.replace('<percentage>', percentage);
    }

    if (attribute.indexOf('<number>') !== -1) {
        attribute = attribute.replace('<number>', '\\d+');
    }

    if (attribute.indexOf('<size>') !== -1) {
        attribute = attribute.replace('<size>', units);
    }

    if (attribute.indexOf('<fraction>') !== -1) {
        attribute = attribute.replace('<fraction>', '\\d+\\/\\d+');
    }

    if (attribute.indexOf('<cursor>') !== -1) {
        attribute = attribute.replace('<cursor>', '\\w+-?\\w+');
    }

    if (attribute.indexOf('<ratio>') !== -1) {
        attribute = attribute.replace('<ratio>', '(\\d+)\\/(\\d+)');
    }

    if (attribute.indexOf('<value>') !== -1) {
        attribute = attribute.replace('<value>', '[a-z0-9]+');
    }

    return attribute;
};
