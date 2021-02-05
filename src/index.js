import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter as Router } from 'react-router-dom';
import ReactBreakpoints from 'react-breakpoints';
// Store
import { store, persistor } from './redux/store';
// App
import App from './App';
// Styles
import 'slick-carousel/slick/slick.css';
import './index.sass';

const breakpoints = {
  xs: 461,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1281,
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router >
        <ReactBreakpoints breakpoints={breakpoints}>
          <App />
        </ReactBreakpoints>
      </Router>
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
