/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Redux
import { checkUserSession } from 'redux/user/user.actions';
// Pages
import HomePage from 'pages/home-page/home-page';
import CategoriesPage from 'pages/categories-page/categories-page';
import CategoryPage from 'pages/category-page/category-page';
import ProductPage from 'pages/product-page/product-page';
import CheckoutPage from 'pages/checkout-page/checkout-page';
import HistoryPage from 'pages/history-page/history-page';
// Components
import ErrorBoudry from 'components/error-boundry/error-boundry';
import ScrollToTop from 'components/scroll-to-top/scroll-to-top';
import Navigation from 'components/navigation/navigation';
import Footer from 'components/footer/footer';
import Cart from 'components/cart/cart';
import PageNotFound from 'pages/404-page/404-page';

const App = ({ checkUserSession, location }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <ErrorBoudry>
      <div className="app">
        {location.pathname !== '/404' && <Navigation />}
        <Cart />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/categories/:categoriesRout"
              exact
              component={CategoriesPage}
            />
            <Route
              path="/categories/:categoriesRout/:categoryRout"
              exact
              component={CategoryPage}
            />
            <Route path="/product/:gameId" exact component={ProductPage} />
            <Route path="/history" exact component={HistoryPage} />
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route path="/404" exact component={PageNotFound} />
            <Redirect to="/404" />
          </Switch>
        </ScrollToTop>
        {location.pathname !== '/checkout' &&
          location.pathname !== '/history' &&
          location.pathname !== '/404' && <Footer />}
      </div>
    </ErrorBoudry>
  );
};

App.propTypes = {
  checkUserSession: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
