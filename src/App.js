import React from 'react';
import TwitterSearch from './components/TwitterSearch';
import ResponseCreator from './components/ResponseCreator'
import ApologyCreator from './components/ApologyCreator';
import TweetsContainer from './containers/TweetsContainer';
import ResponsesContainer from './containers/ResponsesContainer';
import { connect } from 'react-redux';
import { fetchUser } from './actions/fetchUser'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        < TwitterSearch />
        < TweetsContainer />
        < ResponseCreator />
        < ResponsesContainer />
        < ApologyCreator />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
