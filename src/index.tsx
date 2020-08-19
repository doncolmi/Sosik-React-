import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer);

ReactDOM.render(
  
    // <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
    // </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
