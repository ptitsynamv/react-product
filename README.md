# React Product

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Create React App](https://img.shields.io/badge/Create_React_App-5.0.1-09D3AC?logo=createreactapp&logoColor=white)](https://create-react-app.dev/)
[![Redux](https://img.shields.io/badge/Redux-5.0-764ABC?logo=redux&logoColor=white)](https://redux.js.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![styled-components](https://img.shields.io/badge/styled--components-6.1-DB7093?logo=styledcomponents&logoColor=white)](https://styled-components.com/)
[![Sass](https://img.shields.io/badge/Sass-1.70-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20.11.0-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-not%20specified-lightgrey)](#license)
[![Build](https://img.shields.io/badge/CI-not%20configured-lightgrey)](#build-status)

A hands-on **React learning sandbox**. It contains a small product-list app plus a set of separate demo components. Each demo covers one React concept or library, from class components and hooks to concurrent rendering, higher-order components, portals, animations, forms and Redux.

> [!NOTE]
> This is a study project, not a production application. Each demo stands alone, and you choose which one renders by editing `src/index.js` (see [Switching between demos](#switching-between-demos)).

---

## Table of contents

- [Key features](#key-features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Switching between demos](#switching-between-demos)
- [Project structure](#project-structure)
- [Build status](#build-status)
- [License](#license)

---

## Key features

**Product list app** (`components/app`)
- Add and delete products, and toggle each one's *like* (star) and *increase* flags
- Live search by name, plus filters for *all*, *starred* and *sale > 1000*
- Counters for the total and liked items in the header
- Classic class-component state lifted up to `App`, with callbacks passed to child components

**Concept demos**

| Demo | Concepts shown |
| --- | --- |
| `calculator` | Custom hook (`useCalculatorSimple`) |
| `form-test` | Custom validation hook (`useInputWithValidate`), `useRef`, `useEffect` |
| `form-text-2` | Portals (`ReactDOM.createPortal`), class lifecycle methods |
| `form-context-test` | Context API (`createContext`, Provider / Consumer) |
| `filtered-posts` | Concurrent features: `useTransition`, `useDeferredValue`, `useMemo` |
| `memo-text` | `React.memo`, `PureComponent`, `useCallback` |
| `slider` | `useState`, `useEffect`, `useMemo`, `useCallback` |
| `slider-reducer-test` | `useReducer` |
| `higher-order-components` | Higher-order components (`withSlider`) |
| `modal-test` | Animations with `react-transition-group` (`CSSTransition`) |
| `formik-form-test` | Formik (`useFormik`, `<Formik>`, `useField`) + Yup validation schemas |
| `redux-counter-test` | Redux store, action creators, a reducer, `useSelector` / `useDispatch` |
| `app` (`App2`) | Render props, `React.Children` / `cloneElement`, styled-components |

## Tech stack

| Area | Library |
| --- | --- |
| UI | React 18.2, React DOM |
| Tooling | Create React App (`react-scripts` 5.0.1), ESLint (`react-app` config) |
| State | Redux 5, React Redux 9 |
| Forms | Formik 2, Yup 1 |
| Styling | Bootstrap 5.3, React-Bootstrap 2.10, styled-components 6, Sass, plain CSS |
| Animation | react-transition-group 4 |
| Testing | Jest + React Testing Library (bundled with CRA) |

## Prerequisites

The project was built and tested with these exact versions:

| Tool | Version |
| --- | --- |
| Node.js | **v20.11.0** |
| npm | **v10.2.4** |

> [!IMPORTANT]
> The project uses **Create React App / `react-scripts` 5**, which the React team deprecated in 2025. It still works, but it may print warnings or fail on much newer Node.js versions. Use Node 20.11.0 to match the environment the project was built with.

The easiest way to pin that version is a Node version manager:

- **macOS / Linux:** [nvm](https://github.com/nvm-sh/nvm)
- **Windows:** [nvm-windows](https://github.com/coreybutler/nvm-windows)

```bash
nvm install 20.11.0
nvm use 20.11.0

node -v   # v20.11.0
npm -v    # 10.2.4
```

## Getting started

```bash
# 1. Clone the repository
git clone https://github.com/ptitsynamv/react-product.git
cd react-product

# 2. Use the matching Node version
nvm use 20.11.0

# 3. Install the exact dependency versions from package-lock.json
npm ci

# 4. Start the dev server
npm start
```

The app opens at **http://localhost:3000** and reloads when you save a file.

> [!TIP]
> If `npm ci` fails with peer-dependency conflicts on a different npm version, try `npm install --legacy-peer-deps`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the development server on port 3000 |
| `npm run build` | Creates an optimized production build in `build/` |
| `npm test` | Runs Jest in interactive watch mode |
| `npm test -- -t "name"` | Runs only the tests whose names match |
| `npm run eject` | Copies the CRA config into the project. **One-way and irreversible.** |

ESLint runs automatically during `start` and `build`. In addition to the `react-app` preset, it enforces `react/self-closing-comp`.

> There are no test files in the repository yet. `npm test` is ready for when you add `*.test.js` files.

## Switching between demos

`src/index.js` imports every demo but renders only one:

```jsx
root.render(
  <React.StrictMode>
    <ReduxCounterTest />
  </React.StrictMode>
);
```

To view a different demo, put another imported component in its place, for example `<App />`, `<FilteredPosts />` or `<FormikFormTestWrapper />`.

> Note: `components/app/app.js` **default-exports `App2`** (the render-props and styled-components playground). The product-list `App` is a named export.

## Project structure

```text
react-product/
├── public/                     # Static HTML shell, icons, manifest
├── src/
│   ├── index.js                # Entry point: picks which demo to render
│   ├── index.scss              # Global styles (imports variables.scss)
│   ├── variables.scss          # Shared SCSS variables
│   ├── BootstrapTest.js        # Two-column react-bootstrap layout helper
│   └── components/
│       ├── app/                # Product-list root (App) + App2 playground
│       ├── app-info/           # Header with total and liked counters
│       ├── app-filter/         # Filter buttons (all / star / sale)
│       ├── search-panel/       # Search input
│       ├── product-list/       # List container
│       ├── product-list-item/  # Single product row
│       ├── product-add-form/   # "Add product" form
│       ├── calculator/         # Custom hook demo
│       ├── filtered-posts/     # useTransition / useDeferredValue demo
│       ├── form-test/          # Validation hook demo
│       ├── form-text-2/        # Portal demo
│       ├── form-context-test/  # Context API demo
│       ├── memo-text/          # memo / PureComponent demo
│       ├── slider/             # Hooks slider
│       ├── slider-reducer-test/# useReducer slider
│       ├── higher-order-components/
│       ├── modal-test/         # react-transition-group modal
│       ├── formik-form-test/   # Formik + Yup form
│       └── redux-counter-test/ # Redux counter (actions, reducer, store)
├── .eslintrc                   # ESLint config (react-app + self-closing-comp)
└── package.json
```

Each component folder holds the component and its own styles (`.css`, `.scss` or styled-components).

## Build status

This repository has **no CI pipeline yet**, so the build badge is a static placeholder. Once a GitHub Actions workflow exists (for example `.github/workflows/ci.yml` running `npm ci && npm run build`), replace the badge with:

```markdown
[![Build](https://github.com/ptitsynamv/react-product/actions/workflows/ci.yml/badge.svg)](https://github.com/ptitsynamv/react-product/actions/workflows/ci.yml)
```

## License

No license has been chosen for this project yet. Until a `LICENSE` file is added, all rights are reserved by the author.
