import React, { useEffect } from 'react';

const AdScript = () => {
  useEffect(() => {
    const loadAdScript = () => {
      try {
        // Remove any existing AdSense script to prevent duplicates
        const existingScript = document.querySelector('script[src*="pagead2.googlesyndication.com"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }

        // Create and add the new AdSense script
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456'; // Replace with your actual AdSense publisher ID
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.onerror = () => {
          console.error('AdSense script failed to load. Ad blocker might be enabled.');
        };
        document.head.appendChild(script);

        // Initialize AdSense ads when the window loads
        window.addEventListener('load', () => {
          if (typeof window.adsbygoogle !== 'undefined') {
            try {
              const adUnits = document.querySelectorAll('.adsbygoogle');
              if (adUnits.length > 0) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                console.log(`Initialized ${adUnits.length} AdSense units`);
              }
            } catch (e) {
              console.error('AdSense initialization error:', e);
            }
          } else {
            console.warn('AdSense not available. Ads may not display correctly.');
          }
        });
      } catch (error) {
        console.error('Error loading AdSense script:', error);
      }
    };

    // Load the AdSense script
    loadAdScript();

    // Cleanup the script when the component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[src*="pagead2.googlesyndication.com"]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  return null; // This component doesn't render anything to the UI
};

export default AdScript;
