import url from 'url';
import path from 'path';
import { ScanClasses } from '@/utils/scan.ts';

const styles: string[] = [];
const arbitraryValues: {
    [index: string]: object;
} = {};
const getStyles = async () => {
    const scanClasses: ScanClasses = new ScanClasses();
    const files: string[] = await scanClasses.getDeepFiles(path.resolve('./src/styles/'));

    await Promise.all(
        files.map(async (file: string) => {
            if (!file.endsWith('styles\\index.ts')) {
                const style = (await import(url.pathToFileURL(file).href)).default;

                if (style.arbitraryValues !== undefined) {
                    arbitraryValues[file] = style.arbitraryValues;

                    delete style.arbitraryValues;
                }

                Object.assign(styles, style);
            }
        }),
    );
};

await getStyles();

export { styles, arbitraryValues };
