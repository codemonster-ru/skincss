import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import { Plugin, defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import skincss from '@codemonster-ru/vite-plugin-skincss';

export default defineConfig({
    plugins: [skincss() as Plugin[], dts({ include: ['./src'], rollupTypes: true, tsconfigPath: './tsconfig.json' })],
    resolve: {
        alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
    },
    build: {
        emptyOutDir: true,
        cssCodeSplit: true,
        lib: {
            name: 'index',
            entry: resolve(__dirname, 'src/main.ts'),
            fileName: 'index.ts',
        },
    },
});
