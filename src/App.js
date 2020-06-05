import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// Redux
import { selectCartItems } from 'redux/cart/cart.selectors';
import { checkUserSession } from 'redux/user/user.actions';
// Pages
import HomePage from 'pages/home-page/home-page'
import CategoriesPage from 'pages/categories-page/categories-page'
import CategoryPage from 'pages/category-page/category-page';
import ProductPage from 'pages/product-page/product-page';
import CheckoutPage from 'pages/checkout-page/checkout-page';
// Components
import ScrollToTop from "components/scroll-to-top/scroll-to-top.component";
import Navigation from "components/navigation/navigation.component";
import Footer from "components/footer/footer.component";
import Cart from "components/cart/cart.component";
import './app.sass'

class App extends React.Component {

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    const { location, cartItems } = this.props;
    return (
      <div className="app">
        <Navigation />
        <Cart />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/categories/:categoriesRout" exact component={CategoriesPage} />
            <Route path="/categories/:categoriesRout/:categoryRout" exact component={CategoryPage} />
            <Route path="/product/:gameId" exact component={ProductPage} />
            {cartItems.length > 0 && < Route path="/checkout" exact component={CheckoutPage} />}
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
        {location.pathname !== '/checkout' && <Footer />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
