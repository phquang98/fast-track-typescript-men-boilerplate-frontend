# MEN front end

Last updated: 06/03/2020

Use this repo to fastly create React using Typescript and Material UI.\

Typescript: OK
Use DefType: OK
Use custom types in `types` folder: OK
Use Material UI: OK
Personal ESLint and Prettier: OK
Minimum routing using react-router: OK

FINISH:

- da xong tam thoi min routing, su dung Link compo cua react router chu khong dung cua material ui
- chua compo trong `components` folders, roi dung trong `pages` folders

TODO:

- delete the yarn lock file, personal taste like npm more than yarn
- having problems that eslint-node and eslint-import dont recognise path to custom definition type `personalType.ts` (should be `personalType.d.ts` but dont recognise -> cant import and use)
- add Hooks later
- cac link dang doc do:
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElements
- https://developers.google.com/identity/sign-in/web/backend-auth
- https://github.com/Lemoncode/react-typescript-samples/blob/master/hooks/05_Refactor/src/app.tsx
- https://www.codingame.com/playgrounds/6517/react-router-tutorial
- https://reacttraining.com/react-router/web/example/basic

## Personal notes

- all cmds to run this:
  - for DefTypes: `npm i @types/react @types/react-dom`
  - for Material UI: `npm i @material-ui/core @material-ui/icons @material-ui/styles`
  - for personal eslint config to run OK: `npm i -D eslint-config-prettier eslint-plugin-node eslint-plugin-prettier prettier`, eslint will not run if missing npm packages
  - for react-router-dom: `npm i react-router-dom @types/react-router-dom`
- use `.tsx`, cant write JSX in `.ts`
- to add Roboto font:
  - add this link to index.html in public: `<link href="https://fonts.googleapis.com/css?family=Roboto:300i,400,500,700&display=swap" rel="stylesheet" />`
  - add this to body ele `style="font-family: 'Roboto', sans-serif;"`
- set `core.autocrlf true` as when commit, files will have LF but when in your machine will be CRLF
- settings for import resolver must use all file format, including .js, .ts and .tsx
- if use Typography, if has `component="h2"` -> DOM tree will be rendered with that as a h2 ele

## Links

- <https://www.sitepoint.com/react-with-typescript-best-practices/>
- <https://fettblog.eu/typescript-react/>
