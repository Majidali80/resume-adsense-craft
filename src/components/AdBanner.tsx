
import React, { useEffect, useState } from 'react';

interface AdBannerProps {
  adSlot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical' | 'fluid';
  className?: string;
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdBanner = ({ adSlot, format = 'auto', className = '', responsive = true }: AdBannerProps) => {
  const [isAdBlockDetected, setIsAdBlockDetected] = useState(false);

  useEffect(() => {
    try {
      // Check if ads are loaded properly after a short delay
      const timer = setTimeout(() => {
        // Simple check for ad blockers - not foolproof but provides basic detection
        const adElements = document.querySelectorAll('.adsbygoogle');
        const lastAd = adElements[adElements.length - 1];
        
        if (lastAd && lastAd.innerHTML.length === 0) {
          console.log('Potential ad blocker detected');
          setIsAdBlockDetected(true);
        }
      }, 2000);
      
      // Push the ad only after component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log('AdSense ad pushed to queue');
      
      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Error loading AdSense ad:', error);
      setIsAdBlockDetected(true);
    }
  }, []);

  // Set responsive dimensions based on format
  const getResponsiveClasses = () => {
    if (!responsive) return '';
    
    switch(format) {
      case 'rectangle':
        return 'min-h-[250px] md:min-h-[280px]';
      case 'horizontal':
        return 'min-h-[90px] md:min-h-[100px]';
      case 'vertical':
        return 'min-h-[280px] md:min-h-[400px]';
      case 'fluid':
      case 'auto':
      default:
        return 'min-h-[100px] md:min-h-[120px]';
    }
  };

  return (
    <div className={`ad-container my-4 overflow-hidden ${getResponsiveClasses()} ${className}`}>
      {isAdBlockDetected ? (
        <div className="w-full h-full flex items-center justify-center border border-dashed border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded text-center p-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We noticed you might be using an ad blocker.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Ads help us keep ResumeCraft free for everyone.
            </p>
          </div>
        </div>
      ) : (
        <ins 
          className="adsbygoogle block"
          style={{ display: 'block', textAlign: 'center', width: '100%', height: '100%' }}
          data-ad-client="ca-pub-1234567890123456" // Replace with your actual AdSense publisher ID
          data-ad-slot={adSlot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      )}
    </div>
  );
};

export default AdBanner;
