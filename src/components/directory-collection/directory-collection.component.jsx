import React from 'react';
import { withRouter } from 'react-router-dom';
import { withBreakpoints } from 'react-breakpoints';
import PropTypes from 'prop-types';
// Components
import Cards from 'components/cards/cards.component';
import Card from 'components/card/card.component';
import Typography from 'components/typography/typography.component';
import Button from 'components/button/button.component';
// Styles
import './directory-collection.styles.sass';

class DirectoryCollection extends React.Component {
  state = {
    itemsToShow: 5
  }

  static defaultProps = {
    isLoading: false,
    hasError: false,
    title: '',
  }
  static propTypes = {
    collection: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    hasError: PropTypes.bool,
    title: PropTypes.string,
    rootName: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { currentBreakpoint } = this.props;
    this.setItemsToShow(currentBreakpoint);
  }

  componentDidUpdate(prevProps) {
    const { currentBreakpoint } = this.props;
    if (prevProps.currentBreakpoint !== currentBreakpoint) {
      this.setItemsToShow(currentBreakpoint);
    }
  }

  setItemsToShow = (currentBreakpoint) => {
    if (currentBreakpoint === 'xl') {
      this.setState({ itemsToShow: 5 })
    }
    if (currentBreakpoint === 'lg') {
      this.setState({ itemsToShow: 4 })
    }
    if (currentBreakpoint === 'md') {
      this.setState({ itemsToShow: 3 })
    }
    if (currentBreakpoint === 'sm') {
      this.setState({ itemsToShow: 4 })
    }
  }

  render() {
    const { isLoading, hasError, title, collection, rootName, history } = this.props
    const { itemsToShow } = this.state;
    return (
      <div className="directory-collection" >
        <div className="directory-collection-heading">
          <Typography component="h3">By {title}</Typography>
          <Button onClick={() => { history.push(`/categories/${rootName}`) }} btnBordered>View all</Button>
        </div>
        <Cards isLoading={isLoading} hasError={hasError} placeholdersToShow={itemsToShow}>
          {collection.slice(0, itemsToShow).map(({ id, rout, image, name, total }) => (
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
  }
};

export default withBreakpoints(withRouter(DirectoryCollection));
