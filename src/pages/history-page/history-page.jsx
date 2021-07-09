import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectUser } from 'redux/user/user.selectors';
// Layout
import Container from 'grid/container/container';
import Row from 'grid/row/row';
import Col from 'grid/col/col';
// Components
import Typography from 'components/typography/typography';
import CartItemPlaceholder from 'components/placeholders/cart-item-placeholder/cart-item-placeholder';
import CartItem from 'components/cart-item/cart-item';
import ErrorIndicator from 'components/error-indicator/error-indicator';
// Styles
import './history-page.sass';
// Assets
import { ReactComponent as HistoryIcon } from 'assets/images/history/history-is-empty.svg';

export const HistoryPage = ({ user }) => (
  <div className="history-page">
    <Container>
      <Row className="justify-content-center">
        <Col col lg="8">
          <HistoryContainer user={user} />
        </Col>
      </Row>
    </Container>
  </div>
);

HistoryPage.propTypes = {
  user: PropTypes.object.isRequired,
};

export const HistoryContainer = ({ user }) => {
  const { loading, error, currentUser } = user;

  if (loading) {
    // eslint-disable-next-line react/no-array-index-key
    return [...Array(3)].map((_, idx) => <CartItemPlaceholder key={idx} />);
  }
  if (error) {
    return <ErrorIndicator />;
  }
  if (!currentUser) {
    return (
      <HistoryPageInfo text="You need to be signed in to see your history" />
    );
  }
  /* istanbul ignore else */
  if (!('purchaseHistory' in currentUser)) {
    return <HistoryPageInfo text="You haven't bought anything yet" />;
  }

  const { purchaseHistory } = currentUser;

  return (
    <>
      <Typography component="h2" className="mb-5">
        Your purchase history:
      </Typography>
      {purchaseHistory.map((item) => (
        <CartItem key={item.id} cartItem={item} inverted control={false} />
      ))}
    </>
  );
};

HistoryContainer.propTypes = {
  user: PropTypes.object.isRequired,
};

export const HistoryPageInfo = ({ text }) => (
  <div className="history-page-info">
    <div className="history-page-info-wrap">
      <HistoryIcon className="history-page-info-icon" />
      <Typography component="h5" className="mb-0">
        {text}
      </Typography>
    </div>
  </div>
);

HistoryPageInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps, null)(HistoryPage);
