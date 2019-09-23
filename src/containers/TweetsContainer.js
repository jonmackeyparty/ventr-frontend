import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import SelectedTweet from '../components/SelectedTweet'
import Tweets from '../components/Tweets'

class TweetsContainer extends React.Component {

  // componentDidUpdate() {
  //   debugger;
  // }

  render() {
    return(
      <div>
          <Route path='/tweets/:id' render={(routerProps) => <SelectedTweet {...routerProps} selected_tweet={this.props.selected_tweet} />} />
          <Route exact path='/tweets' render={(routerProps) => <Tweets {...routerProps} tweets={this.props.tweets} />} />
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
