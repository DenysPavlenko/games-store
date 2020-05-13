import React from 'react';
// Components
import CardPlaceholder from 'components/card/card-placeholder/card-placeholder'
import ErrorIndicator from 'components/error-indicator/error-indicator.component';
// Styles
import './cards.styles.sass';

const Cards = ({ isLoading, hasError, placeholdersToShow, children }) => {
  if (hasError) {
    return (
      <div className="cards">
        <ErrorIndicator />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="cards">
        {[...Array(placeholdersToShow)].map((elem, idx) => <CardPlaceholder key={idx} />)}
      </div>
    );
  }

  return (
    <div className="cards">
      {children}
    </div>
  );
};

export default Cards;