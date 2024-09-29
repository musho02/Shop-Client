import React from 'react';

const ColorStrip = ({ height = '5px', width = '100%' }) => {
  const stripStyle = {
      height: height,
      width: width,
      background: 'linear-gradient(to right, #d5b168, #FFF7D4 50%, #d5b168)',
  };

  return <div style={stripStyle}></div>;
};

export default ColorStrip;
