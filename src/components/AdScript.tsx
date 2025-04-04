
import React, { useEffect } from 'react';

const AdScript = () => {
  useEffect(() => {
    try {
      // Remove any existing AdSense script
      const existingScript = document.querySelector('script[src*="pagead2.googlesyndication.com"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      
      // Create and add the AdSense script
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456'; // Replace with your actual AdSense publisher ID
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
      
      // Initialize ads if adsense is loaded
      window.addEventListener('load', () => {
        if (typeof window.adsbygoogle !== 'undefined') {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log('AdSense initialized successfully');
          } catch (e) {
            console.error('AdSense initialization error:', e);
          }
        }
      });
      
      return () => {
        // Clean up script if component unmounts
        const scriptToRemove = document.querySelector('script[src*="pagead2.googlesyndication.com"]');
        if (scriptToRemove) {
          document.head.removeChild(scriptToRemove);
        }
      };
    } catch (error) {
      console.error('Error loading AdSense script:', error);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default AdScript;
