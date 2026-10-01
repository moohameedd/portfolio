import { 
  SiReact, 
  SiHtml5, 
  SiJavascript, 
  SiCss, 
  SiMarkdown,
  SiJson
} from 'react-icons/si';
import { FaFilePdf } from 'react-icons/fa';
import { VscGitCommit} from 'react-icons/vsc';
import './Explorer.css';

export const ALL_FILES = [
  {name:'home.tsx', icon: <SiReact style={{ color:'#61dafb' }}/> },
  {name:'about.html', icon: <SiHtml5 style={{ color:'#e34f26' }}/> },
  {name:'projects.js',icon: <SiJavascript style={{color: '#f7df1e'}} /> },
  {name:'skills.json',icon: <SiJson style={{ color: '#f2c94c' }}/> },

  {name: 'contact.css',icon: <SiCss style={{ color:'#1572b6'}} /> },
  {name: 'README.md', icon: <SiMarkdown style={{color:'#42a5f5'}}/>},

  {name: 'Resume.pdf',icon: <FaFilePdf style={{color: '#f44336' }}/> },
];

export default function Explorer({activeFile,onSelectFile }) {
  return (
    <div className="explorer-panel">
      <div className="explorer-section">
        <div className="section-title">
          <span>PORTFOLIO</span>
        </div>

        <div className="file-list">
          {ALL_FILES.map((file)=>(
            <div 
              key={file.name} 
              className={`file-item ${activeFile===file.name ?'active' : ''}`}
              onClick={() => onSelectFile(file)}>
              <span className="file-icon">{file.icon}</span>
              <span className="file-name">{file.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="explorer-footer">
        <div className="git-status">
          <div className="git-left">
            <VscGitCommit className="git-icon" />
            <span>main</span>
          </div>
          <div className="git-changes">
            <span className="up">↑1</span>
            <span className="diff">*5</span>
          </div>
        </div>
      </div>
    </div>
  );
}