import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from 'redux/cart/cart.selectors';
// Redux
import { selectUser } from 'redux/user/user.selectors';
// Layout
import Container from 'layout/container/container';
import Row from 'layout/row/row';
import Col from 'layout/col/col';
// Components
import Typography from 'components/typography/typography';
import CartItem from 'components/cart-item/cart-item';
import CartItemPlaceholder from 'components/placeholders/cart-item-placeholder/cart-item-placeholder';
import ErrorIndicator from 'components/error-indicator/error-indicator';
// Styles
import './history-page.sass';

const HistoryPage = ({ user, cartItems }) => {
  const { currentUser } = user;
  if (!currentUser) { return <Redirect to="/" /> }

  return (
    <div className="history-page">
      <Container>
        <Row className="justify-content-center">
          <Col col lg="8">
            <Typography component="h2" className="mb-5">My purchase history:</Typography>
            <HistoryContainer user={user} cartItems={cartItems} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const HistoryContainer = ({ user, cartItems }) => {
  const { loading, error } = user;
  if (loading) {
    return ([...Array(3)].map((el, idx) => <CartItemPlaceholder key={idx} />))
  }
  if (error) { return <ErrorIndicator /> }
  return (
    <>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} inverted control={false}></CartItem>
      ))}
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  user: selectUser
});

export default connect(mapStateToProps, null)(HistoryPage);
