import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../actions/fetchUser';

class TwitterSearch extends React.Component {

  state = {
    username: 'Enter user name'
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchUser(this.state.username);
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <strong>@</strong><input type='text' value={this.state.username} onChange={event => this.handleChange(event)} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchUser })(TwitterSearch)
