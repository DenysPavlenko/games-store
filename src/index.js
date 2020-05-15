import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// Store
import { store, persistor } from './redux/store';
// App
import App from './App';
// Styles
import 'slick-carousel/slick/slick.css';
import './index.sass';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
