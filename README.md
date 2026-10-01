# Mohamed Ferchichi | VS Code Style Portfolio

A personal portfolio that looks and feels like **Visual Studio Code**: file explorer, tabs, a working terminal, a command palette and switchable color themes. Every "file" in the sidebar is a real page of the website.

**Live demo:** https://portfolio-rosy-ten-75.vercel.app/

<!-- Add a screenshot: put an image in /docs and uncomment the line below -->
<!-- ![Portfolio preview](docs/preview.png) -->

## Features

- **VS Code interface**: activity bar, explorer, tabs with breadcrumbs, status bar and menus (File, View, Go, Help).
- **7 pages as files**: `home.tsx`, `about.html`, `projects.js`, `skills.json`, `contact.css`, `README.md`, `Resume.pdf`.
- **Interactive terminal**: try `help`, `whoami`, `skills`, `projects`, `open about`, `theme nord`, `neofetch`, `cv`.
- **Command palette** (`Ctrl + P`) to jump to any file, run commands or change theme.
- **7 color themes**: Dark+, Monokai, GitHub Dark, Rosé Pine, Tokyo Night, Catppuccin, Nord (saved in `localStorage`).
- **Project filters** (AI, Data, Web, Mobile) with animated cards.
- **Contact form** 
- **Resume download** as a PDF.
- **Fully responsive**: desktop, tablet and phone (drawer explorer, bottom activity bar, hamburger menu).
- **Smooth animations** with Framer Motion.

## Tech Stack

| Area | Tools |
|---|---|
| Framework | React (JavaScript) |
| Animations | Framer Motion |
| Icons | react-icons |
| Styling | Plain CSS with CSS variables (themes) |
| Forms | Formspree |
| Hosting | Vercel |

## Getting Started

Requirements: **Node.js 18+** and npm.

```bash
# 1. Clone the repository
git clone https://github.com/moohameedd/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app runs on `http://localhost:3000`.

To build for production:

```bash
npm run build
```

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + P` | Open the command palette |
| `Ctrl + \`` | Toggle the terminal |
| `Ctrl + B` | Toggle the sidebar |
| `Esc` | Close overlays |

## How It Works

All shared state (open tabs, active tab, theme, terminal, palette) lives in one React Context, `WorkspaceContext`. Clicking a file in the explorer updates `activeTab`, and `MiniSideBar` renders the matching page component. Themes are CSS variables switched through a `data-theme` attribute on the `<html>` tag.

```
WorkspaceProvider
 ├─ Header
 ├─ TopBar
 ├─ MiniSideBar
 │   ├─ Explorer
 │   ├─ TabsHeader
 │   ├─ Page (Home | About | Projects | Skills | Contact | README | Resume)
 │   ├─ TerminalPanel
 │   └─ CommandPalette
 └─ Footer
```

## Customize It

This project is built to be extended. Fork it and make it yours:

- **Add more themes:** add an entry to `themes.js`, then add a `html[data-theme="your-theme"]` block with the color variables in `Themes.css`. It appears automatically in Settings and in the command palette.
- **Add an AI assistant (like Copilot):** add a new button in the activity bar and a chat panel, then connect it to an AI API. Call the API from a backend or serverless function so your API key is never exposed in the browser.
- **Add new pages:** add a file to `ALL_FILES` in `Explorer.jsx`, create its component, and add a `case` for it in `MiniSideBar.jsx`.
- **Add terminal commands:** add a new `case` in `TerminalPanel.jsx` (for example `hello` or `github`).
- **Add your own features:** extensions panel, notifications, a blog, a search that looks inside pages, or anything else you can imagine.
- **Use your own content:** edit the data arrays at the top of `About.jsx`, `Projects.jsx` and `Skills.jsx`, and replace the PDF in `public/`.

## Deploy

The project is deployed on Vercel.

## A Note on AI

Not every line of this project was written by hand from scratch. When I got stuck or wanted to move faster, I used AI tools to help generate and debug parts of the code. I reviewed, tested and adapted the result, and I am happy to explain how every part works.


