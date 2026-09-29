import React from 'react';
import { 
  VscRemote, 
  VscSourceControl, 
  VscError, 
  VscWarning, 
  VscBell 
} from 'react-icons/vsc';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-status-bar">
      
      <div className="footer-left">
        <div className="status-item remote-icon" title="Open Remote Window">
          <VscRemote />
        </div>

        <div className="status-item" title="Git Branch">
          <VscSourceControl className="icon-gap" />
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
        <div className="status-item">
          <span>TypeScript</span>
        </div>

        <div className="status-item">
          <span>UTF-8</span>
        </div>

        <div className="status-item">
          <span>Prettier</span>
        </div>

        <div className="status-item" title="Select Color Theme">
          <span>Dark 2019</span>
        </div>

        <div className="status-item bell-icon" title="Notifications">
          <VscBell />
        </div>
      </div>
    </footer>
  );
}