import React from 'react';
// Styles
import './banner-placeholder.sass';

const BannerPlaceholder = () => {
  return (
    <div className="banner-placeholder">
      <div className="banner-placeholder-left">
      </div>
      <div className="banner-placeholder-right">
        <div className="banner-placeholder-control"></div>
        <div className="banner-placeholder-release"></div>
        <div className="banner-placeholder-name"></div>
        <div className="banner-placeholder-platforms"></div>
        <div className="banner-placeholder-rating"></div>
        <div className="banner-placeholder-button"></div>
      </div>
    </div>
  )
}

export default BannerPlaceholder;
