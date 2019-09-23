import React from 'react';
import TwitterSearch from './components/TwitterSearch';
import ResponsesContainer from './containers/ResponsesContainer';
import ApologyContainer from './containers/ApologyContainer';
import TweetsContainer from './containers/TweetsContainer';

class App extends React.Component {

  render() {
    return (
        <div>
          <TwitterSearch />
          <TweetsContainer />
          <ResponsesContainer />
          <ApologyContainer />
        </div>
    );
  }
}

export default App;
