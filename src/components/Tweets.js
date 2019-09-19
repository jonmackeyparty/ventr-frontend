import React from 'react'
import { connect } from 'react-redux';
import { setSelectedTweet } from '../actions/setSelectedTweet'

class Tweets extends React.Component {

  handleClick = event => {
    event.preventDefault();
    this.props.setSelectedTweet(event.target.value)
  }

  render() {
    return (
      <div>
        {this.props.tweets.map((tweet, index) =>
          <div key={index} >
            <li><br/><strong>Content:</strong> {tweet.content}<br/><strong>Date: </strong>{tweet.date}</li>
            <button value={tweet.id} onClick={event => this.handleClick(event)}>Respond to this tweet</button>
          </div>
        )}
      </div>
    )
  }
}

export default connect(null, { setSelectedTweet })(Tweets)
