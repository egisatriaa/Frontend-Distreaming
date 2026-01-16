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
│  ├─ components
│  │  ├─ Auth
│  │  │  └─ PrivateRoute.jsx
│  │  ├─ button.css
│  │  ├─ Button.jsx
│  │  ├─ card.css
│  │  ├─ Card.jsx
│  │  ├─ categoryFilter.css
│  │  ├─ CategoryFilter.jsx
│  │  ├─ context
│  │  │  └─ AuthContext.jsx
│  │  ├─ footerNavItem.css
│  │  ├─ FooterNavItem.jsx
│  │  ├─ Loading.css
│  │  ├─ Loading.jsx
│  │  ├─ modal.css
│  │  ├─ Modal.jsx
│  │  ├─ movieContent.css
│  │  ├─ MovieContent.jsx
│  │  ├─ movieDate.css
│  │  ├─ MovieDate.jsx
│  │  ├─ movieSwiper.css
│  │  ├─ MovieSwiper.jsx
│  │  ├─ navListItem.css
│  │  ├─ NavListItem.jsx
│  │  ├─ playBtn.css
│  │  ├─ PlayBtn.jsx
│  │  ├─ ratingBadge.css
│  │  ├─ RatingBadge.jsx
│  │  ├─ search.css
│  │  ├─ Search.jsx
│  │  ├─ skeleton.css
│  │  └─ Skeleton.jsx
│  ├─ hooks
│  │  └─ useAuth.js
│  ├─ images
│  │  └─ footer-bg.jpeg
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Admin
│  │  │  └─ Dashboard.jsx
│  │  ├─ banner.css
│  │  ├─ Banner.jsx
│  │  ├─ footer.css
│  │  ├─ Footer.jsx
│  │  ├─ header.css
│  │  ├─ Header.jsx
│  │  ├─ Home.jsx
│  │  ├─ loginPage.css
│  │  ├─ LoginPage.jsx
│  │  ├─ movieDetail.css
│  │  ├─ MovieDetail.jsx
│  │  ├─ openingThisWeek.css
│  │  ├─ OpeningThisWeek.jsx
│  │  ├─ registerPage.css
│  │  ├─ RegisterPage.jsx
│  │  ├─ schedule.css
│  │  └─ Schedule.jsx
│  └─ utils
│     ├─ dateFormate.js
│     ├─ navListData.js
│     └─ useSearchStore.js
└─ vite.config.js

```