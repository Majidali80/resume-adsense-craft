
import React, { useEffect } from 'react';

const AdScript = () => {
  useEffect(() => {
    try {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456'; // Replace with your actual AdSense publisher ID
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
      
      return () => {
        // Clean up script if component unmounts
        document.head.removeChild(script);
      };
    } catch (error) {
      console.error('Error loading AdSense script:', error);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default AdScript;
