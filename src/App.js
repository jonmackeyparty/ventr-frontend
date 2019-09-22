import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TwitterSearch from './components/TwitterSearch';
import TweetsContainer from './containers/TweetsContainer';

class App extends React.Component {

  render() {
    return (
      <Router>
        <>
          <TwitterSearch />
          <TweetsContainer />
        </>
      </Router>
    );
  }
}

export default App;
