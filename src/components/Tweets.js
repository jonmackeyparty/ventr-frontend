import React from 'react'
import Tweet from './Tweet'

class Tweets extends React.Component {

  render() {
    return (
      <div>
        {this.props.tweets.map((tweet, index) =>
          <div key={index}><Tweet tweet={tweet} /></div>)}
      </div>
    )
  }
}

export default Tweets
