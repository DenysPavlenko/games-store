import React from 'react';
// Styles
import './plate-placeholder.sass';

const GamesPreviewPlaceholder = () => {
  return (
    <div className="plate-placeholder">
      <div className="plate-placeholder-left">
      </div>
      <div className="plate-placeholder-right">
        <div className="plate-placeholder-control"></div>
        <div className="plate-placeholder-release"></div>
        <div className="plate-placeholder-name"></div>
        <div className="plate-placeholder-platforms"></div>
        <div className="plate-placeholder-rating"></div>
        <div className="plate-placeholder-button"></div>
      </div>
    </div>
  )
}

export default GamesPreviewPlaceholder;
