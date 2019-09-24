import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import {
  Container, Row, Col,
  Form, Input, InputGroup, Button
} from 'reactstrap'
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
      <Container>
        <Row>
          <Col md={{ size:6, offset: 3}}>
            <Form onSubmit={event => this.handleSubmit(event)}>
              <InputGroup>
                <Input type='text'  placeholder='Enter your response' value={this.state.response} onChange={event => this.handleChange(event)} />
                <Button style={{backgroundColor:'#ccd6dd', color:'#292f33'}} type='submit'>Submit</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(connect(null, { postResponse })(ResponseCreator))
