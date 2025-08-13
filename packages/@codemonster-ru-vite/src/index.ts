import { Plugin, ResolvedConfig } from 'vite';
import { setBase, refresh, bootstrap } from '@codemonster-ru/skincss';

export default function skincss(): Plugin[] {
    let end = false;

    return [
        {
            name: '@codemonster-ru/vite-plugin-skincss:scan',
            enforce: 'pre',
            async configResolved(_config: ResolvedConfig) {
                setBase(_config.root);
            },
            async transform(code: string, id: string) {
                if (!end) {
                    const result = await bootstrap(code, id);

                    if (result) {
                        end = true;

                        result.files.map((file: string) => {
                            this.addWatchFile(file);
                        });

                        return { code: result.code };
                    }
                }

                return { code };
            },
            watchChange() {
                end = false;

                refresh();
            },
        },
    ] satisfies Plugin[];
}
