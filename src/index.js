import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
// App
import App from './App';
// Styles
import 'slick-carousel/slick/slick.css';
import './index.sass';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
