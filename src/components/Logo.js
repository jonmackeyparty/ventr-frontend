import React from 'react'
import {
  Container, Row, Col, Media
} from 'reactstrap'
import logo from '../images/twittrcrop.png'

export default class Logo extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Media style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img src={logo} width="499" height="333" alt="Glitched twitter logo"/>
            </Media>
          </Col>
        </Row>
      </Container>
    )
  }
}
