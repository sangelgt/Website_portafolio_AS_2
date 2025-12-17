import React from 'react';

interface HeroBannerProps {
  welcomeMessage: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ welcomeMessage }) => {

  const handleCTAClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        'event_category': 'Hero Banner',
        'event_label': 'Calcula TU ROI Ahora'
      });
    }
    // Add navigation logic here if needed
  };

  return (
    <div className="bg-[#221910] text-white py-20 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold font-['Inter'] mb-4">{welcomeMessage}</h1>
        <p className="text-xl text-[#CCCCCC] font-['Noto_Sans'] mb-8">Unlock your potential</p>
        <button
          onClick={handleCTAClick}
          className="bg-[#f27f0d] hover:bg-[#d9740b] text-white font-bold py-3 px-8 rounded font-['Noto_Sans']"
        >
          Calcula TU ROI Ahora
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
