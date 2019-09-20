import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import TwitterSearch from './components/TwitterSearch';

import TweetsContainer from './containers/TweetsContainer';
import { connect } from 'react-redux';
import { postUser } from './actions/postUser'


class App extends React.Component {

  render() {
    return (
      <Router>
        <>
          <Route path="/" component={TwitterSearch} />
          <Route path="/tweets" component={TweetsContainer} />
        </>
      </Router>
    );
  }
}

export default connect(null, { postUser })(App);
