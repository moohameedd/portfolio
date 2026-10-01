import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './StyleMiniSideBar.css';
import './Workbench.css';
import './Themes.css';
import './Responsive.css';
import { VscFiles, VscSearch, VscSourceControl, VscSettingsGear, VscTerminal } from 'react-icons/vsc';
import { FaFileDownload } from 'react-icons/fa';
import Explorer from './Explorer';
import TabsHeader from './TabsHeader';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Readme from './Readme';
import Resume from './Resume';
import TerminalPanel from './TerminalPanel';
import CommandPalette from './CommandPalette';
import { GitPopover, SettingsPopover } from './SidePopovers';
import { useWorkspace } from './WorkspaceContext';

export default function MiniSideBar() {
  const w = useWorkspace();
  const [pop, setPop] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setPop(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Measure Header + TopBar + Footer so the workspace fills exactly the remaining height
  useLayoutEffect(() => {
    const find = () => [
      document.querySelector('.app-header') || document.querySelector('.searchDiv')?.closest('.MuiGrid-container'),
      document.querySelector('.top-bar-container'),
      document.querySelector('.footer-status-bar'),
    ].filter(Boolean);
    const apply = () => {
      const h = find().reduce((sum, el) => sum + el.offsetHeight, 0);
      document.documentElement.style.setProperty('--chrome-h', h + 'px');
    };
    apply();
    const ro = new ResizeObserver(apply);
    find().forEach((el) => ro.observe(el));
    window.addEventListener('resize', apply);
    return () => { ro.disconnect(); window.removeEventListener('resize', apply); };
  }, []);

  const togglePop = (name) => setPop((p) => (p === name ? null : name));

  const renderEditorContent = () => {
    switch (w.activeTab) {
      case 'home.tsx':    return <Home onNavigate={w.openFile} />;
      case 'about.html':  return <About/>;
      case 'projects.js': return <Projects/>;
      case 'skills.json': return <Skills/>;
      case 'contact.css': return <Contact/>;
      case 'README.md':   return <Readme/>;
      case 'Resume.pdf':  return <Resume/>;
      default:
        return <div style={{ color: 'var(--mut)', textAlign: 'center', margin: '100px 20px 0' }}>No file selected. Open one from the explorer.</div>;
    }
  };

  return (
    <div className="layout-container" style={{ display: 'flex', background: 'var(--bg)', position: 'relative' }}>
      <div className="miniSideDiv">
        <div className="top-icons">
          <button className={`side-btn ${w.sidebarOpen ? 'active' : ''}`} onClick={w.toggleSidebar} title="Explorer (Ctrl+B)"><VscFiles /></button>
          <button className="side-btn" onClick={() => { setPop(null); w.setPaletteOpen(true); }} title="Search (Ctrl+P)"><VscSearch /></button>
          <button className={`side-btn ${pop === 'git' ? 'active' : ''}`} onClick={() => togglePop('git')} title="Source Control"><VscSourceControl /></button>
          <button className={`side-btn mobile-only ${w.terminalOpen ? 'active' : ''}`} onClick={w.toggleTerminal} title="Terminal"><VscTerminal /></button>
          <button className="side-btn" onClick={w.downloadCV} title="Download CV"><FaFileDownload /></button>
        </div>
        <div className="bottom-icons">
          <button className={`side-btn ${pop === 'settings' ? 'active' : ''}`} onClick={() => togglePop('settings')} title="Settings"><VscSettingsGear /></button>
        </div>
      </div>

      {w.sidebarOpen && <div className="explorer-backdrop" onClick={w.toggleSidebar} />}
      {w.sidebarOpen && <Explorer activeFile={w.activeTab} onSelectFile={(f) => w.openFile(f.name)} />}

      <div className="main-col">
        <TabsHeader openTabs={w.openTabs} activeTab={w.activeTab} onSelectTab={w.setActiveTab} onCloseTab={w.closeTab} />
        <div className="editor-content-area" style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: 'var(--bg)' }}>
          <div key={w.activeTab}>{renderEditorContent()}</div>
        </div>
        <AnimatePresence>{w.terminalOpen && <TerminalPanel />}</AnimatePresence>
      </div>

      {pop && <div className="pop-backdrop" onClick={() => setPop(null)} />}
      <AnimatePresence>
        {pop === 'git' && <GitPopover key="git" />}
        {pop === 'settings' && <SettingsPopover key="settings" onClose={() => setPop(null)} />}
      </AnimatePresence>
      <AnimatePresence>{w.paletteOpen && <CommandPalette key="palette" />}</AnimatePresence>
    </div>
  );
}