import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
import { postUser } from '../actions/postUser';

class TwitterSearch extends React.Component {

  state = {
    username: ''
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.postUser(this.state.username);
    this.props.history.push('/tweets')
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <strong>@</strong><input type='text'  placeholder='Enter User name' value={this.state.username} onChange={event => this.handleChange(event)} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, { postUser })(TwitterSearch))
