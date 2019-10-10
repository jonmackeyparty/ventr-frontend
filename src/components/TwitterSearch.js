import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import {
  Container, Row, Col,
  Form, Input, InputGroup, InputGroupAddon, Button
} from 'reactstrap'
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
    this.props.history.push(`/${this.state.username}/tweets`)
  }

  render() {
    return (
        <Container style={{marginTop: '10px', marginBottom: '5px'}}>
          <Row>
            <Col md={{ size:6, offset: 3}}>
              <Form onSubmit={event => this.handleSubmit(event)}>
                <InputGroup>
                  <InputGroupAddon addonType='prepend'>@</InputGroupAddon>
                  <Input type='text'  placeholder='Enter User name' value={this.state.username} onChange={event => this.handleChange(event)} />
                  <Button style={{backgroundColor:'#ccd6dd', color:'#292f33'}} type='submit'>Submit</Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
    )
  }
}

export default withRouter(connect(null, { postUser })(TwitterSearch))
