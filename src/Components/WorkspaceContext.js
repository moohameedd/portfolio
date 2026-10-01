import { createContext, useContext, useEffect, useState } from 'react';
import { ALL_FILES } from './Explorer';

export const CV_URL = '/CV_Mohamed_Ferchichi_EN.pdf';
const Ctx = createContext(null);
export const useWorkspace = () => useContext(Ctx);

export function WorkspaceProvider({ children }) {
  const [openTabs, setOpenTabs] = useState([ALL_FILES[0]]);
  const [activeTab, setActiveTab] = useState(ALL_FILES[0].name);
  const [recent, setRecent] = useState([ALL_FILES[0].name]);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > 820);
  const [theme, setThemeState] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark-plus'; } catch { return 'dark-plus'; }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  // Global shortcuts
  useEffect(() => {
    const onKey = (e) => {
      const mod = e.ctrlKey || e.metaKey;
      const k = e.key.toLowerCase();
      if (mod && k === 'p') { e.preventDefault(); setPaletteOpen((v) => !v); }
      else if (mod && e.key === '`') { e.preventDefault(); setTerminalOpen((v) => !v); }
      else if (mod && k === 'b') { e.preventDefault(); setSidebarOpen((v) => !v); }
      else if (e.key === 'Escape') setPaletteOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openFile = (name) => {
    const file = ALL_FILES.find((f) => f.name === name);
    if (!file) return;
    setOpenTabs((tabs) => (tabs.some((t) => t.name === name) ? tabs : [...tabs, file]));
    setActiveTab(name);
    if (window.matchMedia('(max-width: 820px)').matches) setSidebarOpen(false);
    setRecent((r) => [name, ...r.filter((n) => n !== name)].slice(0, 6));
  };

  const closeTab = (name) => {
    const next = openTabs.filter((t) => t.name !== name);
    setOpenTabs(next);
    if (activeTab === name) setActiveTab(next.length ? next[next.length - 1].name : null);
  };

  const closeAll = () => { setOpenTabs([]); setActiveTab(null); };

  const downloadCV = () => {
    const a = document.createElement('a');
    a.href = CV_URL;
    a.download = 'CV_Mohamed_Ferchichi_EN.pdf';
    a.click();
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  };

  const value = {
    openTabs, activeTab, setActiveTab, recent, openFile, closeTab, closeAll,
    terminalOpen, setTerminalOpen, toggleTerminal: () => setTerminalOpen((v) => !v),
    paletteOpen, setPaletteOpen,
    sidebarOpen, toggleSidebar: () => setSidebarOpen((v) => !v),
    theme, setTheme: setThemeState, downloadCV, toggleFullscreen,
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
