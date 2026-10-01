import React, { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import './StyleTopBar.css';
import './Workbench.css';
import { ALL_FILES } from './Explorer';
import { useWorkspace } from './WorkspaceContext';
import useMediaQuery from './useMediaQuery';

const NAMES = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];

export default function TopBar() {
  const w = useWorkspace();
  const small = useMediaQuery('(max-width: 700px)');
  const [open, setOpen] = useState(null);

  const fileTop = [
    { label: 'New Tab', fn: () => w.openFile('home.tsx') },
    { label: 'Open File…', hint: 'Ctrl+P', fn: () => w.setPaletteOpen(true) },
    'sep',
    { label: 'Close Tab', fn: () => w.activeTab && w.closeTab(w.activeTab) },
    { label: 'Close All Tabs', fn: w.closeAll },
  ];
  const download = { label: 'Download Resume', fn: w.downloadCV };

  const MENUS = {
    File: [
      ...fileTop, 'sep', { heading: 'OPEN RECENT' },
      ...w.recent.slice(0, 4).map((n) => ({ label: n, fn: () => w.openFile(n) })),
      'sep', download,
    ],
    View: [
      { label: 'Command Palette', hint: 'Ctrl+P', fn: () => w.setPaletteOpen(true) },
      { label: 'Toggle Terminal', hint: 'Ctrl+`', fn: w.toggleTerminal },
      { label: 'Toggle Sidebar', hint: 'Ctrl+B', fn: w.toggleSidebar },
      { label: 'Toggle Fullscreen', fn: w.toggleFullscreen },
    ],
    Go: ALL_FILES.map((f) => ({ label: f.name, fn: () => w.openFile(f.name) })),
    Help: [
      { label: 'About this portfolio', fn: () => w.openFile('README.md') },
      { label: 'Open Terminal', fn: () => w.setTerminalOpen(true) },
    ],
  };

  const renderItems = (items) =>
    items.map((it, i) =>
      it === 'sep' ? <div key={i} className="menu-sep" />
      : it.heading ? <div key={i} className="menu-heading">{it.heading}</div>
      : (
        <button key={i} className="menu-item" onClick={() => { setOpen(null); it.fn(); }}>
          <span>{it.label}</span>{it.hint && <span className="hint">{it.hint}</span>}
        </button>
      )
    );

  const handle = (name) => {
    if (name === 'Terminal') { setOpen(null); w.toggleTerminal(); return; }
    if (MENUS[name]) setOpen(open === name ? null : name);
  };

  return (
    <div className="top-bar-container">
      <div className="logo-wrapper">
        <img src="/vscode-icon.png" alt="VS Code logo" className="top-bar-logo" />
      </div>

      <div className="menu-group">
        {open && <div className="menu-backdrop" onClick={() => setOpen(null)} />}

        {small ? (
          /* Phones: one hamburger that lists every menu */
          <div className="menu-wrap">
            <button className={`top-bar-btn ${open === 'all' ? 'on' : ''}`} onClick={() => setOpen(open === 'all' ? null : 'all')} aria-label="Menu">
              <VscMenu />
            </button>
            {open === 'all' && (
              <div className="menu-drop menu-drop-all">
                <div className="menu-heading">FILE</div>
                {renderItems([...fileTop, download])}
                <div className="menu-sep" />
                <div className="menu-heading">VIEW</div>
                {renderItems(MENUS.View)}
                <div className="menu-sep" />
                <div className="menu-heading">GO</div>
                {renderItems(MENUS.Go)}
              </div>
            )}
          </div>
        ) : (
          NAMES.map((name) => (
            <div key={name} className="menu-wrap" onMouseEnter={() => open && MENUS[name] && setOpen(name)}>
              <button
                className={`top-bar-btn ${(name === 'Terminal' && w.terminalOpen) || open === name ? 'on' : ''}`}
                onClick={() => handle(name)}
              >
                {name}
              </button>
              {open === name && <div className="menu-drop">{renderItems(MENUS[name])}</div>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
