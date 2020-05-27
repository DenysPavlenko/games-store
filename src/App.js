import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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


const App = () => {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Cart />

        <ScrollToTop>
          <Switch>

            <Route path="/" exact component={HomePage} />
            <Route path="/categories/:categoriesRout" exact component={CategoriesPage} />
            <Route path="/categories/:categoriesRout/:categoryRout" exact component={CategoryPage} />
            <Route path="/product/:gameId" exact component={ProductPage} />
            <Route path="/checkout" exact component={CheckoutPage} />

            <Redirect to="/" />
          </Switch>
        </ScrollToTop>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
