import React from 'react';
import { connect } from 'react-redux';

import Tweets from '../components/Tweets'

class TweetsContainer extends React.Component {

  render() {
    return(
      <div>
        <Tweets tweets={this.props.tweets} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.user.tweets
  }
}

export default connect(mapStateToProps)(TweetsContainer)
