import { motion } from 'framer-motion';
import { VscGithubAlt, VscCheck } from 'react-icons/vsc';
import { THEMES } from './Themes';
import { useWorkspace } from './WorkspaceContext';

const anim = {
  initial: { opacity: 0, x: -8, scale: 0.98 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -8, scale: 0.98 },
  transition: { duration: 0.16 },
};

export function GitPopover() {
  return (
    <motion.div className="popover pop-git" {...anim}>
      <div className="pop-head">SOURCE CONTROL</div>
      <div className="git-row"><span>⎇ main</span><span className="ahead">↑ 1 commit ahead</span></div>
      <div className="git-stats">
        <div><b style={{ color: 'var(--p)' }}>3</b><small>Modified</small></div>
        <div><b style={{ color: 'var(--g)' }}>1</b><small>Added</small></div>
        <div><b style={{ color: '#f87171' }}>0</b><small>Deleted</small></div>
      </div>
      <a className="pop-link" href="https://github.com/moohameedd" target="_blank" rel="noopener noreferrer">
        <VscGithubAlt /> View on GitHub ↗
      </a>
    </motion.div>
  );
}

export function SettingsPopover({ onClose }) {
  const w = useWorkspace();
  const act = (fn) => () => { fn(); onClose(); };
  return (
    <motion.div className="popover pop-settings" {...anim}>
      <div className="pop-head">SETTINGS</div>

      <div className="pop-label">COLOR THEME</div>
      {THEMES.map((t) => (
        <button key={t.id} className={`pop-row ${w.theme === t.id ? 'on' : ''}`} onClick={() => w.setTheme(t.id)}>
          <span className="swatch" style={{ background: t.dot }} />
          <span className="grow">{t.emoji} {t.label}</span>
          {w.theme === t.id && <VscCheck />}
        </button>
      ))}

      <div className="pop-label">QUICK ACTIONS</div>
      <button className="pop-row" onClick={act(() => w.setPaletteOpen(true))}><span className="grow">Command Palette</span><span className="hint">Ctrl+P</span></button>
      <button className="pop-row" onClick={act(w.toggleTerminal)}><span className="grow">Toggle Terminal</span><span className="hint">Ctrl+`</span></button>
      <button className="pop-row" onClick={act(w.downloadCV)}><span className="grow">Download Resume</span></button>
      <button className="pop-row" onClick={act(w.toggleFullscreen)}><span className="grow">Toggle Fullscreen</span></button>

      <div className="pop-shortcuts"><div className="pop-label">KEYBOARD SHORTCUTS</div>
      <div className="shortcut"><span className="kbd">Ctrl P </span> Go to file</div>
      <div className="shortcut"><span className="kbd">Ctrl ` </span> Toggle terminal</div>
      <div className="shortcut"><span className="kbd">Ctrl B</span> Toggle sidebar</div>
      <div className="shortcut"><span className="kbd">Esc</span> Close overlay</div></div>

      <div className="pop-foot">Portfolio v1.0 · React + Framer Motion
        <br />
        Made by Mohamed Ferchichi
        </div>
    </motion.div>
  );
}
