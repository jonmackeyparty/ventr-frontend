import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
import { setSelectedTweet } from '../actions/setSelectedTweet'

class Tweet extends React.Component {

  handleClick = event => {
    let tweet_id = event.target.value
    event.preventDefault();
    this.props.setSelectedTweet(tweet_id)
    this.props.history.push(`/tweets/${tweet_id}`)
  }

  render() {
    return (
      <div>
        <li><br/><strong>Content:</strong> {this.props.tweet.content}<br/><strong>Date: </strong>{this.props.tweet.date}</li>
        <button type='submit' value={this.props.tweet.id} onClick={event => this.handleClick(event)}>Respond to this tweet</button >
      </div>
    )
  }
}

export default withRouter(connect(null, { setSelectedTweet })(Tweet))
