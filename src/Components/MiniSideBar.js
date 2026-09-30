import React, { useState } from 'react';
import './StyleMiniSideBar.css';
import { 
  VscFiles, 
  VscSearch, 
  VscSourceControl, 
  VscSettingsGear 
} from 'react-icons/vsc';
import { FaFileDownload } from "react-icons/fa";
import Explorer from './Explorer';

export default function MiniSideBar() {
  const [activeTab, setActiveTab] = useState('files');

  const handleTabClick = (tabName) => {
    setActiveTab((prevTab) => (prevTab === tabName ? null : tabName));
  };

  return (
    <div className="layout-container" style={{ display: 'flex' }}>
      <div className="miniSideDiv">
        <div className="top-icons">
          <button 
            className={`side-btn ${activeTab === 'files' ? 'active' : ''}`}
            onClick={() => handleTabClick('files')}
            title="Explorer"
          >
            <VscFiles />
          </button>

          <button 
            className={`side-btn ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => handleTabClick('search')}
            title="Search"
          >
            <VscSearch />
          </button>

          <button 
            className={`side-btn ${activeTab === 'git' ? 'active' : ''}`}
            onClick={() => handleTabClick('git')}
            title="Source Control"
          >
            <VscSourceControl />
          </button>

          <button 
            className={`side-btn ${activeTab === 'download' ? 'active' : ''}`}
            onClick={() => handleTabClick('download')}
            title="Download CV"
          >
            <FaFileDownload />
          </button>
        </div>

        <div className="bottom-icons">
          <button 
            className={`side-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => handleTabClick('settings')}
            title="Settings"
          >
            <VscSettingsGear />
          </button>
        </div>
      </div>

      {activeTab === 'files' && <Explorer />}
    </div>
  );
}