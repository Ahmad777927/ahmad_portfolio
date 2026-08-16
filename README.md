# Ahmad — Portfolio (React)

Converted from the original single-file HTML portfolio into a Vite + React
project, split into components, with a light/dark theme toggle persisted to
`localStorage`.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a static build in `dist/`.

## Structure

```
index.html                     entry HTML — sets initial theme before paint
src/
  main.jsx                     mounts <App /> inside ThemeProvider
  App.jsx                      composes all sections
  index.css                    all styles; dark theme is default, [data-theme='light'] overrides
  context/
    ThemeContext.jsx           theme state + localStorage persistence
  components/
    Navbar.jsx                 nav links + ThemeToggle
    ThemeToggle.jsx            sun/moon button, toggles + persists theme
    Hero.jsx
    About.jsx                  intro + fact list (Frontend/Styling/Backend/Platform/Workflow)
    Experience.jsx             Truckoom Technologies, Saffran Labs, Sani IT Consultant
    Work.jsx                   Truckoom, ScanZilla, Padel AI, MERN AUTH
    Stack.jsx                  the "tree" stack view, including backend/ folder
    AITools.jsx                Claude Code, Claude Desktop/MCP, Cursor AI, Antigravity, GitHub Copilot, ChatGPT
    Approach.jsx                "How I work"
    Contact.jsx                 email / LinkedIn / GitHub links
    Footer.jsx
```

## Theme toggle

`ThemeContext` reads `localStorage.getItem('theme')` on load (defaults to
`dark`), and writes back to `localStorage` and to
`document.documentElement.dataset.theme` whenever it changes. A small inline
script in `index.html` sets the theme attribute before React mounts, so there's
no flash of the wrong theme on reload.

