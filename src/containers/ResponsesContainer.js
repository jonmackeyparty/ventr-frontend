import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Responses from '../components/Responses'
import ResponseCreator from '../components/ResponseCreator'

class ResponsesContainer extends React.Component {

  // componentDidUpdate() {
  //   debugger;
  // }

  render() {
    return(
      <div>
        <Route path='/tweets/:id' render={(routerProps) => <ResponseCreator {...routerProps} selected_tweet={this.props.selected_tweet} />} />
        <Route path='/tweets/:id/responses' render={(routerProps) => <Responses {...routerProps} responses={this.props.selected_tweet.responses} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selected_tweet: state.user.selected_tweet
  }
}

export default connect(mapStateToProps)(ResponsesContainer)
