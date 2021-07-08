import React from 'react';
import PropTypes from 'prop-types';
// Components
import CardPlaceholder from 'components/placeholders/card-placeholder/card-placeholder';
import ErrorIndicator from 'components/error-indicator/error-indicator';
// Styles
import './cards.sass';

const Cards = ({ children, isLoading, hasError, placeholdersToShow }) => {
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
        {[...Array(placeholdersToShow)].map((elem, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <CardPlaceholder key={idx} />
        ))}
      </div>
    );
  }

  return <div className="cards">{children}</div>;
};

Cards.defaultProps = {
  placeholdersToShow: 5,
  isLoading: false,
  hasError: false,
};

Cards.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  placeholdersToShow: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Cards;
