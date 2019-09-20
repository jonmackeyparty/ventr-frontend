import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
import { setSelectedTweet } from '../actions/setSelectedTweet'

class Tweets extends React.Component {

  handleClick = event => {
    let tweet_id = event.target.value
    event.preventDefault();
    this.props.setSelectedTweet(tweet_id)
    this.props.history.push(`/tweets/${tweet_id}`)
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

export default withRouter(connect(null, { setSelectedTweet })(Tweets))
