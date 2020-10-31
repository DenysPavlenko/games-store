import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectUser } from 'redux/user/user.selectors';
// Layout
import Container from 'layout/container/container';
import Row from 'layout/row/row';
import Col from 'layout/col/col';
// Components
import Typography from 'components/typography/typography';
import CartItemPlaceholder from 'components/placeholders/cart-item-placeholder/cart-item-placeholder';
import CartItem from 'components/cart-item/cart-item';
import ErrorIndicator from 'components/error-indicator/error-indicator';
// Styles
import './history-page.sass';

const HistoryPage = ({ user }) => {
  return (
    <div className="history-page">
      <Container>
        <Row className="justify-content-center">
          <Col col lg="8">
            <Typography component="h2" className="mb-5">Your purchase history:</Typography>
            <HistoryContainer user={user} />
            {/* <Typography component="h2" className="mb-5">Your purchase history:</Typography>
            {currentUser ?
              :
              <Typography component="h5">You need to be signed in to see your history...</Typography>
            } */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const HistoryContainer = ({ user }) => {
  const { loading, error, currentUser = {} } = user

  if (loading) {
    return ([...Array(3)].map((el, idx) => <CartItemPlaceholder key={idx} />))
  }
  if (error) {
    return <ErrorIndicator />
  }
  if (!currentUser) {
    return <Typography component="h5">You need to be signed in to see your history...</Typography>
  }

  const { purchaseHistory } = currentUser;
  const items = (purchaseHistory.map((item) => (<CartItem key={item.id} cartItem={item} inverted control={false}></CartItem>)));

  return (
    <>
      {items.length ?
        items
        :
        <Typography component="h5">Your history is empty...</Typography>
      }
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps, null)(HistoryPage);
