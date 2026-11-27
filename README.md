# SkinCSS

SkinCSS scans project sources for utility classes and generates CSS at build time. The Vite
plugin runs the scan and adds the generated stylesheet to the build.

## Get started

In a Vite project, install the framework and plugin.

```bash
npm install @codemonster-ru/skincss @codemonster-ru/vite-plugin-skincss
```

Register the plugin in `vite.config.ts`.

```ts
import { defineConfig } from 'vite';
import skincss from '@codemonster-ru/vite-plugin-skincss';

export default defineConfig({
    plugins: [skincss()],
});
```

Import SkinCSS in the stylesheet loaded by the application.

```css
@import '@codemonster-ru/skincss';
```

## Control source scanning

| Directive | Use |
| --- | --- |
| `@import '@codemonster-ru/skincss' source("path");` | Set the base directory for scanning. |
| `@import '@codemonster-ru/skincss' source(none);` | Disable automatic source scanning. |
| `@source "path";` | Add a source to scan, including when automatic scanning is disabled. |
| `@source not "path";` | Exclude a directory and its subdirectories. |

## Packages and development

| Package | Use |
| --- | --- |
| [`@codemonster-ru/skincss`](packages/@codemonster-ru-skincss) | Utility scanning and CSS generation. |
| [`@codemonster-ru/vite-plugin-skincss`](packages/@codemonster-ru-vite) | Integration for Vite projects. |

The [Vite playground](playgrounds/vite) contains a complete example. Run `npm run install-all`
followed by `npm run build-all` from the repository root to build both packages.

Use [GitHub Issues](https://github.com/codemonster-ru/skincss/issues) for questions and reproducible bugs.

Follow the [contribution guide](./CONTRIBUTING.md) to propose changes.
Report vulnerabilities through the [security policy](./SECURITY.md).

Licensed under the [MIT License](LICENSE.md).
