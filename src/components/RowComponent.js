import React from 'react';
import './RowComponent.css';

const RowComponent = ({ leftContent, rightContent, reverse = false }) => {
  return (
    <div className={`row-container ${reverse ? 'reverse' : ''}`} style={{background: 'linear-gradient(to right, var(--nav-color), var(--dark-color) 50%, var(--nav-color))'}}>
      <div className="left-content">
        {leftContent}
      </div>
      <div className="right-content">
        {rightContent}
      </div>
    </div>
  );
};

export default RowComponent;
