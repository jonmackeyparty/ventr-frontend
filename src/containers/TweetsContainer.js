import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/fetchUser';

import Tweets from '../components/Tweets'

class TweetsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUser()
  }


  render() {
    return(
      <div>
        <Tweets tweets={this.props.tweets}/>
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    tweets: state.user.tweets
  }
}

export default connect(mapStateToProps, { fetchUser })(TweetsContainer)
