import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import SelectedTweet from '../components/SelectedTweet'
import Tweets from '../components/Tweets'

class TweetsContainer extends React.Component {

  render() {
    return(
      <div>
        <Route path='/:username/tweets/:id' render={() => <SelectedTweet selected_tweet={this.props.selected_tweet} url={this.props.url} username={this.props.username} screen_name={this.props.screen_name} />} />
        <Route exact path='/:username/tweets' render={() => <Tweets errors={this.props.errors} tweets={this.props.tweets} url={this.props.url} username={this.props.username} screen_name={this.props.screen_name} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.user.errors,
    username: state.user.username,
    screen_name: state.user.screen_name,
    url: state.user.avi_url,
    tweets: state.user.tweets,
    selected_tweet: state.user.selected_tweet
  }
}

export default connect(mapStateToProps)(TweetsContainer)
