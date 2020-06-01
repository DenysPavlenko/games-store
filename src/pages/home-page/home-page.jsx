import React from 'react';
// Components
import GamesPreview from 'components/games-preview/games-preview.component';
import Directory from 'components/directory/directory.component';
// Styles
import './home-page.sass'

const HomePage = () => {
  return (
    <div className="home-page">
      <GamesPreview />
      <Directory />
    </div>
  )
}

export default HomePage;
