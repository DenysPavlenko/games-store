import React from 'react';
// Components
import GamesPreview from 'components/games-preview/games-preview';
import Directory from 'components/directory/directory';
// Styles
import './home-page.sass';

const HomePage = () => (
  <div className="home-page">
    <GamesPreview />
    <Directory />
  </div>
);

export default HomePage;
