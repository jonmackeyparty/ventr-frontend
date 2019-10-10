import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Apology from '../components/Apology';
import ApologyCreator from '../components/ApologyCreator'

class ApologyContainer extends React.Component {

  render() {
    return(
      <div>
        <Route path='/:username/tweets/:id/responses' render={() => <ApologyCreator selected_tweet={this.props.selected_tweet} screen_name={this.props.screen_name} />} />
        <Route path ='/:username/tweets/:id/apology' render={() => <Apology user={this.props.user} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selected_tweet: state.user.selected_tweet,
    screen_name: state.user.screen_name,
    user: state.user
  }
}

export default connect(mapStateToProps)(ApologyContainer)
