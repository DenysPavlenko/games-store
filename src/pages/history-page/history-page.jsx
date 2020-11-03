import React from 'react';
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
// Assets
import { ReactComponent as HistoryIcon } from 'assets/images/history/history-is-empty.svg';

const HistoryPage = ({ user }) => {
  return (
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
    return <HistoryPageInfo text="You need to be signed in to see your history" />
  }

  const { purchaseHistory = [] } = currentUser;
  const items = (purchaseHistory.map((item) => (
    <>
      <Typography component="h2" className="mb-5">Your purchase history:</Typography>
      <CartItem key={item.id} cartItem={item} inverted control={false}></CartItem>
    </>
  )));

  return (
    <>
      {items.length ?
        items
        :
        <HistoryPageInfo text="You haven't bought anything yet" />
      }
    </>
  )
};

const HistoryPageInfo = ({ text }) => {
  return (
    <div className="history-page-info">
      <div className="history-page-info-wrap">
        <HistoryIcon className="history-page-info-icon"></HistoryIcon>
        <Typography component="h5" className="mb-0">{text}</Typography>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps, null)(HistoryPage);
