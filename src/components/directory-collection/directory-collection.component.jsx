import React from 'react';
import { withRouter } from 'react-router-dom';
// Components
import Cards from 'components/cards/cards.component';
import Card from 'components/card/card.component';
import Typography from 'components/typography/typography.component';
import Button from 'components/button/button.component';
// Styles
import './directory-collection.styles.sass'

const DirectoryCollection = ({ isLoading, hasError, title, collection, rootName, history }) => {
  return (
    <div className="directory-collection">
      <div className="directory-collection-heading">
        <Typography component="h3">By {title}</Typography>
        <Button onClick={() => { history.push(`/categories/${rootName}`) }} btnBordered>View all</Button>
      </div>
      <Cards isLoading={isLoading} hasError={hasError} placeholdersToShow={5}>
        {collection.slice(0, 5).map(({ id, rout, image, name, total }) => (
          <Card key={id} onClick={() => history.push(`/categories/${rootName}/${rout}`)} >
            <Card.Image image={image} />
            <Card.Info>
              <Typography component="h5">{name}</Typography>
              <Typography component="h6" className="mb-0">Total: {total} games</Typography>
            </Card.Info>
          </Card>
        ))}
      </Cards>
    </div>
  );
};


export default withRouter(DirectoryCollection);
