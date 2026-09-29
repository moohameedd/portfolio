import React, { useState } from 'react';
import './StyleMiniSideBar.css';
import { 
  VscFiles, 
  VscSearch, 
  VscSourceControl, 
  VscSettingsGear 
} from 'react-icons/vsc';
import { FaFileDownload } from "react-icons/fa";

export default function MiniSideBar() {
  const [activeTab, setActiveTab] = useState('files');

  return (
    <div className='miniSideDiv'>
      <div className="top-icons">
        <button 
          className={`side-btn ${activeTab === 'files' ? 'active' : ''}`}
          onClick={() => setActiveTab('files')}
          title="Explorer"
        >
          <VscFiles />
        </button>

        <button 
          className={`side-btn ${activeTab === 'search' ? 'active' : ''}`}
          onClick={() => setActiveTab('search')}
          title="Search"
        >
          <VscSearch />
        </button>

        <button 
          className={`side-btn ${activeTab === 'git' ? 'active' : ''}`}
          onClick={() => setActiveTab('git')}
          title="Source Control"
        >
          <VscSourceControl />
        </button>

        <button 
          className={`side-btn ${activeTab === 'download' ? 'active' : ''}`}
          onClick={() => setActiveTab('download')}
          title="Download CV"
        >
          <FaFileDownload />
        </button>
      </div>

      <div className="bottom-icons">
        <button 
          className={`side-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
          title="Settings"
        >
          <VscSettingsGear />
        </button>
      </div>
    </div>
  );
}