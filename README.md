# AUDS

A Template for your next Web Project

- `A` - AstroJs
- `U` - Unocss
- `D` - DaisyUi
- `S` - Svelte


## Installation / Initialize / Setup

Initalize a AUDS Project with

bun
```bash
bun create astro@latest -- --template keshavWebDev-personal/AUDS-template#master
```

## Stuff Included
### Packages
- Astro (latest)
- Unocss (latest)
  - Default Unocss Stuff
  - Unocss Icones Preset (with Tabler Icones Set)
- daisyui (latest)
- tailwind (latest) (used only to serve DaisyUi Classes)
- Svelte (latest)
### Deplot to GH Pages
- Change the value for `base` key in `astro.config.mjs` to basically Define a Sub Path that comes after `https://<your_github_username>.github.io/...` for gh pages hosting
- example: `astro.config.mjs`
```js
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true,
  }), svelte(), tailwind()],
  site: "https://Keshav-writes-code.github.io",
  base: "new_project",
});
```
- Path on GH Pages = `https://keshavWebDev-personal.github.io/new_project`
- when you do your First Push of a project created with this template (with the `base` and `site` params set) on Github, it will be automatically deployed to GH Pages with the above mentioned resulting URL  


## Screenshots

![localhost_4321_Project_Name](https://github.com/user-attachments/assets/1e772f1e-e4a3-4a6d-8f55-5b97283d01f7)


