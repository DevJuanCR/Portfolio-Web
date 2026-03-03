# Portfolio Web

Mi portfolio personal. Hecho con React y Tailwind, con soporte para 4 idiomas y modo oscuro.

**[devjuancr.com](https://devjuancr.com)**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deployed-000?logo=vercel&logoColor=white)

## Que tiene

- Modo oscuro/claro con persistencia en localStorage
- 4 idiomas (ES, EN, CA, RO) con react-i18next y banderas de flag-icons
- Proyectos cargados desde la API de GitHub con barra de lenguajes
- Skeleton loading mientras cargan los proyectos
- Descripciones de proyectos traducidas (las que no tienen traduccion usan la de GitHub)
- Tooltips en el tech stack mostrando en que proyecto use cada tecnologia
- Animaciones de scroll, typing en el hero, parallax y preloader con framer-motion
- Stats animados con conteo
- Navbar que detecta la seccion activa, transparente arriba y con blur en movil
- Badge "Disponible para trabajar" con punto verde pulsante
- Grid de puntos animado de fondo que reacciona al raton
- Efecto hover con glow en avatar, stats, education y project cards
- Boton back to top
- Pagina 404 personalizada
- Open Graph meta tags para LinkedIn, WhatsApp, Twitter/X, etc
- Responsive en movil, tablet y desktop

## Stack

| Que | Con que |
|-----|---------|
| Frontend | React 18 + Vite |
| Estilos | Tailwind CSS 4 |
| Idiomas | react-i18next |
| Animaciones | Framer Motion |
| Iconos | react-icons + flag-icons |
| Routing | react-router-dom |
| API | GitHub REST API |
| Deploy | Vercel |
| Dominio | devjuancr.com |

## Arrancar en local

```bash
git clone https://github.com/DevJuanCR/Portfolio-Web.git
cd Portfolio-Web
npm install
npm run dev
```

Abrir `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
├── assets/
├── components/
│   ├── About.jsx
│   ├── BackToTop.jsx
│   ├── Contact.jsx
│   ├── CountUp.jsx
│   ├── DotGrid.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── NotFound.jsx
│   ├── Preloader.jsx
│   ├── ProjectSkeleton.jsx
│   ├── Projects.jsx
│   ├── ScrollReveal.jsx
│   ├── Stats.jsx
│   ├── TechStack.jsx
│   ├── Tooltip.jsx
│   └── TypingText.jsx
├── hooks/
│   ├── useActiveSection.js
│   └── useTheme.js
├── i18n/
│   ├── i18n.js
│   └── locales/
│       ├── ca.json
│       ├── en.json
│       ├── es.json
│       └── ro.json
├── pages/
│   └── Home.jsx
├── App.jsx
├── index.css
└── main.jsx
```
