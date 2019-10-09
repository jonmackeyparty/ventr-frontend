import React from 'react';
import {
  withRouter
} from 'react-router-dom';
import {
  Container, Row, Col, Media
} from 'reactstrap';
import logo from '../images/twittrcropr.jpg'

class Logo extends React.Component {

  handleClick = event => {
    event.preventDefault();
    this.props.history.push('/')
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Media style={{
              justifyContent: 'center',
              alignItems: 'center',
            }} >
              <img src={logo} width="499" height="333" alt="Glitched twitter logo" onClick = { event => this.handleClick(event) } />
            </Media>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(Logo)
