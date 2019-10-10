import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Responses from '../components/Responses'
import ResponseCreator from '../components/ResponseCreator'

class ResponsesContainer extends React.Component {

  render() {
    return(
      <div>
        <Route path='/:username/tweets/:id' render={() => <ResponseCreator selected_tweet={this.props.selected_tweet} screen_name={this.props.screen_name} />} />
        <Route path='/:username/tweets/:id/responses' render={() => <Responses responses={this.props.selected_tweet.responses} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selected_tweet: state.user.selected_tweet,
    screen_name: state.user.screen_name
  }
}

export default connect(mapStateToProps)(ResponsesContainer)
