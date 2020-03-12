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
- Google Sign in button:
  - client ID: 903071779533-b9om8er3acdvuh5kea67qa264vc915ut.apps.googleusercontent.com
    - URL used here is: http://localhost:3000/api/v1/admin/products
  - client secret: hkooN2uz4gu_7PLH7tJTtmxD
- dang lam do copy cac link html va tao nut google bang react google signin
- thanh cong access duoc vao cai response tra ve tu Gooogle Id

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
- when create client ID token for frontend, choose WEB BROWSER, not WEB SERVER
- when run frontend, use different port from backend, in Wins must add `PORT=port_here &&`
- js dont have arrray type -> when typeof array, it print out obj
- if writing type guards with arrays of 2 types, write like this: `(ProductType | undefined)[]`, do not write like this `(ProductType[] | undefined[])`
- know that there is a thing called ES6 Object Shorthand Notation, when write `return {productAll}`, it just means that it is `return {productAll: productAll}` -> know understand why when des ass must have exactly same name, because it is accessing the FUCKING prop of the obj, of course it must be exactly the same
- conditional rendering: instead of `if(productAl.length !== 0)`, you can `return (productAll && productAll.....)`
- when creating types, types props must exactly like the name of the data, for example data `_id, name, age` -> type must have `_id, name, age`
- if use MongoDB and mongoose auto generate \_id, remember that \_id is a string, not a number
- dont understand why Promise must have generic as `void` not `undefined`

## Links

- <https://www.sitepoint.com/react-with-typescript-best-practices/>
- <https://fettblog.eu/typescript-react/>
- <https://blog.bitsrc.io/must-know-concepts-of-react-router-fb9c8cc3c12>
