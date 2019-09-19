import React from 'react';
import TwitterSearch from './components/TwitterSearch';
import ResponseCreator from './components/ResponseCreator'
import ApologyCreator from './components/ApologyCreator';
import TweetsContainer from './containers/TweetsContainer';
import ResponsesContainer from './containers/ResponsesContainer';
import { connect } from 'react-redux';
import { fetchUser } from './actions/fetchUser'


class App extends React.Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/users')
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  // }

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
