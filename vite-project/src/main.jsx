import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import * as sessionActions from "./store/session";
import configureStore from './store/index.js'

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.sessionActions = sessionActions;
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
