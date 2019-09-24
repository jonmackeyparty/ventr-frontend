import React from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap'

export default class ApologyCreator extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size:6, offset: 3}}>
            <div className="text-center">
              <Button style={{backgroundColor:'#ccd6dd', color:'#292f33'}}>Get Apology</Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
