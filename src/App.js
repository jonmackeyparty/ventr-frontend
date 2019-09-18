import React from 'react';
import TwitterSearch from './TwitterSearch'


class App extends React.Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/users')
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  // }

  render() {
  return (
    <div className="App">
      App
      < TwitterSearch />
    </div>
    );
  }
}

export default App;
