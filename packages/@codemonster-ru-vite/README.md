# @codemonster-ru/vite-plugin-skincss

Vite plugin for SkinCSS.

## Install

```bash
npm i @codemonster-ru/vite-plugin-skincss @codemonster-ru/skincss
```

## Usage

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
```

## Notes

- `@import '@codemonster-ru/skincss';` is processed once per build.
- Use `@source` directives to control scan paths.

## Author

[@KolesnikovKirill](https://github.com/kolesnikovKirill)
