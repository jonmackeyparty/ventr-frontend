import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
import { postResponse } from '../actions/postResponse'

class ResponseCreator extends React.Component {

  state = {
    response: ''
  }

  handleChange = event => {
    this.setState({
      response: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // debugger;
    this.props.postResponse(this.state.response, this.props.selected_tweet.id);
    this.setState({
      response: ''
    })
    this.props.history.push(`/tweets/${this.props.selected_tweet.id}/responses`)
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type='text' value={this.state.response} placeholder='Enter your response' onChange={event => this.handleChange(event)} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, { postResponse })(ResponseCreator))
