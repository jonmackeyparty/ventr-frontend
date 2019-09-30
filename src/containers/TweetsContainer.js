import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import SelectedTweet from '../components/SelectedTweet'
import Tweets from '../components/Tweets'

class TweetsContainer extends React.Component {

  render() {
    return(
      <div>
          <Route path='/tweets/:id' render={() => <SelectedTweet selected_tweet={this.props.selected_tweet} url={this.props.url} username={this.props.username} />} />
          <Route exact path='/tweets' render={() => <Tweets tweets={this.props.tweets} url={this.props.url} username={this.props.username} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.user.username,
    url: state.user.avi_url,
    tweets: state.user.tweets,
    selected_tweet: state.user.selected_tweet
  }
}

export default connect(mapStateToProps)(TweetsContainer)
