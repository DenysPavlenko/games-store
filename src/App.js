import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// Firebase
import { auth } from 'firebase/firebase.utils';
// Redux
import { selectCartItems } from 'redux/cart/cart.selectors';
// Pages
import HomePage from 'pages/home-page/home-page'
import CategoriesPage from 'pages/categories-page/categories-page'
import CategoryPage from 'pages/category-page/category-page';
import ProductPage from 'pages/product-page/product-page';
import CheckoutPage from 'pages/checkout-page/checkout-page';
// import SignFormsPage from 'pages/sign-forms-page/sign-forms-page';
// Components
import ScrollToTop from "components/scroll-to-top/scroll-to-top.component";
import Navigation from "components/navigation/navigation.component";
import Footer from "components/footer/footer.component";
import Cart from "components/cart/cart.component";
import './app.sass'

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      // console.log('user:', user);
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { location, cartItems } = this.props;
    const { currentUser } = this.state;
    return (
      <div className="app">
        <Navigation currentUser={currentUser} />
        <Cart />

        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <Route path="/signin" exact component={SignFormsPage} /> */}
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

export default withRouter(connect(mapStateToProps)(App));
