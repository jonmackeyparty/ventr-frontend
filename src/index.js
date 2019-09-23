import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import tweetsReducer from './reducers/tweetsReducer'

import App from './App';

let store = createStore(tweetsReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' render={() => <App />} />
    </Router>
  </Provider>
    ,
  document.getElementById('root'));
