import React from 'react';
import {
  Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Response = ( {tweet} ) => {

  return (
    <Row>
      <Col md={{ size:6, offset: 3}}>
        <Card>
          <CardImg />
          <CardBody>
            <CardText>{tweet.content}</CardText>
            <CardSubtitle>{tweet.date}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Response
