import React from 'react';
import { connect } from 'react-redux';
import SelectedTweet from '../components/SelectedTweet'
import Tweets from '../components/Tweets'

class TweetsContainer extends React.Component {

  render() {
    return(
      <div>
          <SelectedTweet selected_tweet={this.props.selected_tweet} />
          <Tweets tweets={this.props.tweets} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.user.tweets,
    selected_tweet: state.user.selected_tweet
  }
}

export default connect(mapStateToProps)(TweetsContainer)
