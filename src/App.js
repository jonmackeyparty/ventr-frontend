import React from 'react';
import Logo from './components/Logo';
import TwitterSearch from './components/TwitterSearch';
import ErrorBox from './components/ErrorBox';
import ResponsesContainer from './containers/ResponsesContainer';
import ApologyContainer from './containers/ApologyContainer';
import TweetsContainer from './containers/TweetsContainer';

class App extends React.Component {

  render() {
    return (
        <>
          <Logo />
          <TwitterSearch />
          <ErrorBox />
          <TweetsContainer />
          <ResponsesContainer />
          <ApologyContainer />
        </>
    );
  }
}

export default App;
