import { VscRemote, VscSourceControl, VscError, VscWarning, VscBell } from 'react-icons/vsc';
import './Footer.css';
import { THEMES } from './Themes';
import { useWorkspace } from './WorkspaceContext';

//language name shown on the right,depends on the open file
const LANGS = { tsx:'TypeScript React',html:'HTML',js:'JavaScript',json:'JSON', css:'CSS', md:'Markdown',pdf:'PDF' };

export default function Footer() {
  const w=useWorkspace();
  const ext=w.activeTab ? w.activeTab.split('.').pop():'';
  const lang=LANGS[ext] || 'Plain Text';
  const themeName=THEMES.find((t) => t.id === w.theme)?.label;

  return (
    <footer className="footer-status-bar">
      <div className="footer-left">
        <div className="status-item remote-icon" title="Toggle Terminal" onClick={w.toggleTerminal}>
          <VscRemote />
        </div>
        <div className="status-item" title="Git Branch">
          <VscSourceControl className="icon-gap"/>
          <span>main</span>
        </div>
        <div className="status-item" title="Problems">
          <VscError className="icon-gap" />
          <span>0</span>
          <VscWarning className="icon-gap margin-left" />
          <span>0</span>
        </div>
      </div>

      <div className="footer-right">
        <div className="status-item"><span>{lang}</span></div>
        <div className="status-item hide-sm"><span>UTF-8</span></div>
        <div className="status-item hide-sm"><span>Prettier</span></div>
        <div className="status-item hide-xs" title="Select Color Theme" onClick={()=>w.setPaletteOpen(true)}>
          <span>{themeName}</span>
        </div>
        <div className="status-item bell-icon" title="Notifications"><VscBell /></div>
      </div>
    </footer>
  );
}
