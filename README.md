# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


```
Frontend-Distreaming
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  └─ ApiClient.js
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ features
│  │  ├─ Admin
│  │  │  ├─ components
│  │  │  │  └─ pages
│  │  │  └─ Dashboard.jsx
│  │  ├─ auth
│  │  │  ├─ components
│  │  │  │  └─ PrivateRoute.jsx
│  │  │  ├─ context
│  │  │  │  └─ AuthContext.jsx
│  │  │  └─ pages
│  │  │     ├─ loginPage.css
│  │  │     ├─ LoginPage.jsx
│  │  │     ├─ registerPage.css
│  │  │     └─ RegisterPage.jsx
│  │  ├─ home
│  │  │  ├─ components
│  │  │  │  ├─ banner.css
│  │  │  │  ├─ Banner.jsx
│  │  │  │  ├─ openingThisWeek.css
│  │  │  │  ├─ OpeningThisWeek.jsx
│  │  │  │  ├─ schedule.css
│  │  │  │  └─ Schedule.jsx
│  │  │  └─ pages
│  │  │     └─ Home.jsx
│  │  ├─ movies
│  │  │  ├─ components
│  │  │  │  ├─ movieContent.css
│  │  │  │  ├─ MovieContent.jsx
│  │  │  │  ├─ movieDate.css
│  │  │  │  ├─ MovieDate.jsx
│  │  │  │  ├─ movieSwiper.css
│  │  │  │  └─ MovieSwiper.jsx
│  │  │  └─ pages
│  │  │     ├─ movieDetail.css
│  │  │     └─ MovieDetail.jsx
│  │  ├─ profile
│  │  │  └─ pages
│  │  └─ user
│  ├─ images
│  │  └─ footer-bg.jpeg
│  ├─ index.css
│  ├─ main.jsx
│  └─ shared
│     ├─ components
│     │  ├─ common
│     │  │  ├─ button.css
│     │  │  ├─ Button.jsx
│     │  │  ├─ Loading.css
│     │  │  ├─ Loading.jsx
│     │  │  ├─ modal.css
│     │  │  ├─ Modal.jsx
│     │  │  ├─ skeleton.css
│     │  │  └─ Skeleton.jsx
│     │  ├─ forms
│     │  │  ├─ categoryFilter.css
│     │  │  ├─ CategoryFilter.jsx
│     │  │  ├─ search.css
│     │  │  └─ Search.jsx
│     │  ├─ navigation
│     │  │  ├─ footer.css
│     │  │  ├─ Footer.jsx
│     │  │  ├─ footerNavItem.css
│     │  │  ├─ FooterNavItem.jsx
│     │  │  ├─ header.css
│     │  │  ├─ Header.jsx
│     │  │  ├─ navListItem.css
│     │  │  └─ NavListItem.jsx
│     │  └─ ui
│     │     ├─ card.css
│     │     ├─ Card.jsx
│     │     ├─ playBtn.css
│     │     ├─ PlayBtn.jsx
│     │     ├─ ratingBadge.css
│     │     └─ RatingBadge.jsx
│     ├─ hooks
│     │  └─ useAuth.js
│     └─ utils
│        ├─ dateFormate.js
│        ├─ navListData.js
│        └─ useSearchStore.js
└─ vite.config.js

```