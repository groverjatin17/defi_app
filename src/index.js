import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';
// import rootReducer from './reducers/index.js';
import store from './store';
import './index.css';

// const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
