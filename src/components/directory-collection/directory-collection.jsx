/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withBreakpoints } from 'react-breakpoints';
import PropTypes from 'prop-types';
// Components
import Cards from 'components/cards/cards';
import Card from 'components/card/card';
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
// Styles
import './directory-collection.sass';

export const DirectoryCollection = ({
  currentBreakpoint,
  isLoading,
  hasError,
  title,
  collection,
  rootName,
  history,
}) => {
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    if (currentBreakpoint === 'xl') {
      setItemsToShow(5);
    } else if (currentBreakpoint === 'lg') {
      setItemsToShow(4);
    } else if (currentBreakpoint === 'md') {
      setItemsToShow(3);
    } else if (currentBreakpoint === 'sm') {
      setItemsToShow(4);
    }
  }, [currentBreakpoint]);

  return (
    <div className="directory-collection">
      <div className="directory-collection-heading">
        <Typography component="h3">By {title}</Typography>
        <Button
          onClick={() => {
            history.push(`/categories/${rootName}`);
          }}
          btnBordered
        >
          View all
        </Button>
      </div>
      <Cards
        isLoading={isLoading}
        hasError={hasError}
        placeholdersToShow={itemsToShow}
      >
        {collection
          .slice(0, itemsToShow)
          .map(({ id, rout, image, name, total }) => (
            <Card
              key={id}
              onClick={() => history.push(`/categories/${rootName}/${rout}`)}
              image={image}
            >
              <Typography component="h5">{name}</Typography>
              <Typography component="h6" className="mb-0">
                Total: {total} games
              </Typography>
            </Card>
          ))}
      </Cards>
    </div>
  );
};

DirectoryCollection.defaultProps = {
  isLoading: false,
  hasError: false,
  title: '',
};

DirectoryCollection.propTypes = {
  collection: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  title: PropTypes.string,
  rootName: PropTypes.string.isRequired,
};

export default withBreakpoints(withRouter(DirectoryCollection));
