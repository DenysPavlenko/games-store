import React from 'react';
// Styles
import './plate-placeholder.sass';

const PlatePlaceholder = () => (
  <div className="plate-placeholder">
    <div className="plate-placeholder-left" />
    <div className="plate-placeholder-right">
      <div className="plate-placeholder-control" />
      <div className="plate-placeholder-release" />
      <div className="plate-placeholder-name" />
      <div className="plate-placeholder-platforms" />
      <div className="plate-placeholder-rating" />
      <div className="plate-placeholder-button" />
    </div>
  </div>
);

export default PlatePlaceholder;
