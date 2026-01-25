# SkinCSS

Open source CSS framework with fast utility scanning and zero-runtime output.

## Install

```bash
npm i @codemonster-ru/skincss @codemonster-ru/vite-plugin-skincss
```

## Usage (Vite)

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import skincss from '@codemonster-ru/vite-plugin-skincss';

export default defineConfig({
    plugins: [skincss()],
});
```

```css
/* main.css */
@import '@codemonster-ru/skincss';

/* Optional sources */
@source "./src";
@source not "./src/vendor";
```

## Directives

- `@import '@codemonster-ru/skincss';` runs once per build.
- `@import '@codemonster-ru/skincss' source("path");` sets base scan directory.
- `@import '@codemonster-ru/skincss' source(none);` disables base scan.
- `@source "path";` explicitly adds a scan directory (works with `source(none)`).
- `@source not "path";` ignores a directory and its subpaths.

## Author

[@KolesnikovKirill](https://github.com/kolesnikovKirill)
