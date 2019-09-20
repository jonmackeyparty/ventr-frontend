import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
import { postResponse } from '../actions/postResponse'

class ResponseCreator extends React.Component {

  state = {
    response: 'Enter your response'
  }

  handleChange = event => {
    this.setState({
      response: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.postResponse(this.state.response, this.props.tweet_id);
    this.setState({
      response: ''
    })
    this.props.history.push(`/tweets/${this.props.tweet_id}/responses`)
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type='text' value={this.state.response} onChange={event => this.handleChange(event)} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, { postResponse })(ResponseCreator))
