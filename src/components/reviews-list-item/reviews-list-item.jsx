import React from 'react';
// Components
import Typography from 'components/typography/typography';
import PropTypes from 'prop-types';
// Styles
import './reviews-list-item.sass';

const ReviewsListItem = ({ title, name, rating, review }) => {
  return (
    <div className="reviews-list-item">
      <div className="reviews-list-item-heading">
        <Typography component="h5">{title}</Typography>
        <Typography component="h6" className="text-muted">{name}</Typography>
      </div>
      <Typography component="h6">{rating}</Typography>
      <Typography component="p" className="mb-0 text-muted">{review}</Typography>
    </div>
  );
};

ReviewsListItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.string,
};

export default ReviewsListItem;
