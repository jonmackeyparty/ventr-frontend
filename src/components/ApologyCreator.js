import React from 'react';
import {
  withRouter
} from 'react-router-dom';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { getApology } from '../actions/getApology'

class ApologyCreator extends React.Component {

  handleClick = event => {
    event.preventDefault();
    // debugger;
    this.props.getApology(this.props.selected_tweet.id);
    this.props.history.push(`/tweets/${this.props.selected_tweet.id}/apology`)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size:6, offset: 3}}>
            <div className="text-center">
              <Button style={{backgroundColor:'#ccd6dd', color:'#292f33'}} onClick={event => this.handleClick(event)}>Get Apology</Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(connect(null, { getApology })(ApologyCreator))
