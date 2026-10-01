import { VscSearch } from 'react-icons/vsc';
import { useWorkspace } from './WorkspaceContext';

export default function Header() {
  const w = useWorkspace();
  return (
    <div className="app-header">
      <div className="win-dots"><span /><span /><span /></div>
      <button className="search-pill" onClick={() => w.setPaletteOpen(true)} title="Go to file (Ctrl+P)">
        <VscSearch />
        <span>Mohamed-ferchichi : portfolio</span>
      </button>
      <div />
    </div>
  );
}
