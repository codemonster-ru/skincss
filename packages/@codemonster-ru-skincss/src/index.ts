import './index.css';
import path from 'path';
import ConfigClass from './core/config';
import ScannerClass from './core/scanner';

const config = new ConfigClass();
const scanner = new ScannerClass();
const getExtension = (filePath: string) => {
    const [fileName] = filePath.split('?', 2);

    return path.extname(fileName).slice(1);
};
const isCssFile = (filePath: string): boolean => getExtension(filePath) === 'css' || filePath.includes('&lang.css');
const isPotentialFile = (filePath: string) => !filePath.includes('.vite') && isCssFile(filePath);
const isDetermineSource = async (code: string, filePath: string): Promise<boolean> => {
    if (config.enable || !isPotentialFile(filePath)) {
        return false;
    }

    if (!scanner.isImport(code)) {
        return false;
    }

    const baseSource: string = scanner.getBaseSource(code, filePath);
    const getExplicitlySources: string[] = scanner.getExplicitlySources(code, filePath);
    const getIgnoredSources: string[] = scanner.getIgnoredSources(code, filePath);

    if (baseSource === 'none' && !getExplicitlySources) {
        return false;
    }

    config.enable = true;
    config.baseSource = baseSource ? baseSource : config.base;
    config.explicitlySources = getExplicitlySources ? getExplicitlySources : [];
    config.ignoredSources = getIgnoredSources ? getIgnoredSources : [];

    return true;
};
const setBase = (path: string) => (config.base = path);
const bootstrap = async (code: string, id: string) => {
    if (await isDetermineSource(code, id)) {
        return await scanner.applyCss(config, code);
    }
};

export { setBase, bootstrap };
