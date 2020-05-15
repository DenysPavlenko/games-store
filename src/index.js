import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
// Redux
import { Provider } from 'react-redux';
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
