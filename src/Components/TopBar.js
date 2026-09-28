import React from 'react';
import './StyleTopBar.css';

export default function TopBar() {
  return (
    <div className="top-bar-container">
      
      <div className="logo-wrapper">
        <img src="/vscode-icon.png" alt="VS Code logo" className="top-bar-logo" />
      </div>
      <div className="menu-group">
        <button className="top-bar-btn">File</button>
        <button className="top-bar-btn">Edit</button>
        <button className="top-bar-btn">View</button>
        <button className="top-bar-btn">Go</button>
        <button className="top-bar-btn">Run</button>
        <button className="top-bar-btn">Terminal</button>
        <button className="top-bar-btn">Help</button>
      </div>
    </div>
  );
}