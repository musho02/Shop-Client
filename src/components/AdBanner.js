import React, { useState, useEffect } from 'react';
import './AdBanner.css';
import  ad1 from '../Adv/adbanner1.jpg';
import  ad2 from '../Adv/adbanner2.jpg';
import  ad3 from '../Adv/adbanner3.jpg';

const adImages = [
  ad1,
  ad2,
  ad3,
];

const AdBanner = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ad-banner">
      <img src={adImages[currentAdIndex]} alt="Advertisement" className="ad-image" />
    </div>
  );
};

export default AdBanner;
