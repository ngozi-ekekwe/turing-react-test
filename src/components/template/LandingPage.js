import React from 'react';

const LandingPage = ({slug}) => {
  const text = (slug) => {
    switch(slug) {
      case "1": {
        return 'REGIONAL'
      }
  
      case "2": {
        return 'NATURE'
      }
      case "3": {
        return 'SEASONAL'
      }
  
      default: {
        return 'NEW TRENDS, COOL STYLES, BEST BUY'
      }
    }
  }
  return (
    <div className="landing-page">
      <div>
        {text(slug)}
        </div>
    </div>
  );
};

export default LandingPage;