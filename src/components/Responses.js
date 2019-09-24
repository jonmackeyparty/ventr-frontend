import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import Response from './Response'

const Responses = ( {responses} ) => {

  return (
    <Container>
      {responses.length > 0 &&
        <Row>
          <Col md={{ size:6, offset: 3}}>
            <div className="text-center">
              <strong>Your Responses:</strong>
            </div>
          </Col>
        </Row>
      }
      {responses.map((tweet, index) =>
        <Response key={index} tweet={tweet} />
      )}
    </Container>
  )
}

export default Responses
