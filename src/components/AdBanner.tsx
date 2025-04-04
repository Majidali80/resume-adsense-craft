
import React, { useEffect } from 'react';

interface AdBannerProps {
  adSlot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdBanner = ({ adSlot, format = 'auto', className = '' }: AdBannerProps) => {
  useEffect(() => {
    try {
      // Push the ad only after component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log('AdSense ad pushed to queue');
    } catch (error) {
      console.error('Error loading AdSense ad:', error);
    }
  }, []);

  return (
    <div className={`ad-container my-4 overflow-hidden ${className}`}>
      <ins 
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-1234567890123456" // Replace with your actual AdSense publisher ID
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
