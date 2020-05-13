import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// Pages
import HomePage from 'pages/home-page/home-page'
import CategoriesPage from 'pages/categories-page/categories-page'
import CategoryPage from 'pages/category-page/category-page';
import ProductPage from 'pages/product-page/product-page';
// Components
import ScrollToTop from "components/scroll-to-top/scroll-to-top.component";
import Navigation from "components/navigation/navigation.component";
import Footer from "components/footer/footer.component";
import './app.sass'


// fetch("https://rawg-video-games-database.p.rapidapi.com/platforms", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
//     "x-rapidapi-key": "9598c96e8dmshbf06c0e2380b5cbp102cc7jsnb817c41fdec8"
//   }
// })
//   .then(response => {
//     return response.json()
//   })
//   .then(response => {
//     console.log(response.results);
//   })


const App = () => {
  return (
    <div className="app">
      <Router>
        <Navigation />

        <ScrollToTop>
          <Switch>

            <Route path="/" exact component={HomePage} />
            <Route path="/categories/:categoriesRout" exact component={CategoriesPage} />
            <Route path="/categories/:categoriesRout/:categoryRout" exact component={CategoryPage} />
            <Route path="/product/:gameId" exact component={ProductPage} />

            <Redirect to="/" />
          </Switch>
        </ScrollToTop>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
