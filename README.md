# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## ...
Schema del JSON de CV:
https://jsonresume.org/schema

Basado en:
- https://github.com/BartoszJarocki/cv
- https://github.com/midudev/minimalist-portfolio-json

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Notas

En `powershell`, podemos hacer:
```bash
PS C:\Users\dresp\Escritorio\FULL-STACK\Astro\CV> cd .\src\
PS C:\Users\dresp\Escritorio\FULL-STACK\Astro\CV\src> cd .\assets\svg\
PS C:\Users\dresp\Escritorio\FULL-STACK\Astro\CV\src\assets\svg>

Get-ChildItem -Filter *.svg | Rename-Item -NewName { $_.Name -replace '\.svg$', '.astro' }
```
para reemplazar todas las extensiones y cambiarlas a `.astro`.
