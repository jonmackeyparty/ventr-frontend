import React from 'react';
import TwitterSearch from './components/TwitterSearch';
import ApologyCreator from './components/ApologyCreator';
import TweetsContainer from './containers/TweetsContainer';
import { connect } from 'react-redux';
import { fetchUser } from './actions/fetchUser'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        < TwitterSearch />
        < TweetsContainer />
        < ApologyCreator />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
