import React from 'react';
import './ContentBox.css';

const ContentBox = ({ leftContent, rightContent }) => {
    return (
        <div className={`box-container`} >
          <div className="left-box-content">
            {leftContent}
          </div>
          <div className="right-box-content">
            {rightContent}
          </div>
        </div>
      );
}

export default ContentBox;