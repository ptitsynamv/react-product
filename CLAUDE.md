# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project nature

This is a **React learning sandbox** (Create React App, plain JavaScript — no TypeScript), not a production app. Each commit adds a demo of a React concept (custom hooks, `useTransition`/`useDeferredValue`, `memo`/`PureComponent`, HOCs, `useReducer`, `react-transition-group`, Formik + Yup, Redux). The Angular conventions in the user's global instructions do **not** apply here.

Required toolchain (from README): Node v20.11.0, npm v10.2.4.

## Commands

- `npm start` — dev server (react-scripts)
- `npm run build` — production build
- `npm test` — Jest in watch mode via react-scripts; single file: `npm test -- src/path/File.test.js`, single test: `npm test -- -t "test name"`. Note: there are currently **no test files** in the repo.
- Lint: ESLint runs through react-scripts during `start`/`build`; there is no separate lint script. `.eslintrc` extends `react-app` and enforces `react/self-closing-comp` (self-close empty components *and* HTML elements).

## Architecture

- **`src/index.js` is the demo switchboard.** It imports every demo component and renders exactly one inside `<React.StrictMode>`; others are left commented out. To view/work on a different demo, change what `root.render(...)` mounts. Newly added demos should be imported and mounted here.
- **`src/components/<kebab-case-folder>/`** — each folder is one self-contained demo or a piece of the product-list app. File naming is mixed: older components use kebab-case (`product-list.js`), newer ones PascalCase (`Calculator.js`); match the folder you're in.
- **Product list app** (`components/app/app.js` `App`, class component): holds all state (`data`, `term`, `filter`) and passes callbacks down to `app-info`, `search-panel`, `app-filter`, `product-list` → `product-list-item`, and `product-add-form`. Filtering/search are derived in `render()`. Note `app.js` default-exports `App2` (a render-props / `React.Children` / styled-components playground), not `App`; `App` and the styled `Button` are named exports.
- **Redux demo** (`components/redux-counter-test/`): store is created inside the `ReduxCounterTest` component with `legacy_createStore` + Redux DevTools hook; state is a bare number; action creators in `actions.js`, reducer in `reducer.js`, consumer uses `useSelector`/`useDispatch`.
- **Styling** is intentionally mixed: per-component `.css`/`.scss` files, `styled-components`, and Bootstrap (`bootstrap.min.css` imported globally in `index.js`, plus `react-bootstrap` components). Global SCSS variables live in `src/variables.scss`, imported by `src/index.scss`.
