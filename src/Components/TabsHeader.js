import { VscClose, VscChevronRight } from 'react-icons/vsc';
import './TabsHeader.css';

export default function TabsHeader({ 
  openTabs, 
  activeTab, 
  onSelectTab, 
  onCloseTab 
}) {
  if (!openTabs || openTabs.length === 0) return null;

  return (
    <div className="tabs-header-container">
      <div className="tabs-bar">
        {openTabs.map((file) => {
          const isActive = activeTab === file.name;
          return (
            <div
              key={file.name}
              className={`tab-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectTab(file.name)}
            >
              <span className="tab-icon">{file.icon}</span>
              <span className="tab-name">{file.name}</span>
              <button
                className="close-btn"
                onClick={(e) => {
                  e.stopPropagation(); 
                  onCloseTab(file.name);
                }}
              >
                <VscClose />
              </button>
            </div>
          );
        })}
      </div>

      {activeTab && (
        <div className="breadcrumbs-bar">
          <span className="breadcrumb-item">portfolio</span>
          <VscChevronRight className="breadcrumb-arrow" />
          <span className="breadcrumb-item">src</span>
          <VscChevronRight className="breadcrumb-arrow" />
          <span className="breadcrumb-item active-file">{activeTab}</span>
        </div>
      )}
    </div>
  );
}