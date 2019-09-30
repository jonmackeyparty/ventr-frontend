import React from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import egg from '../images/egg_avi.jpg'

const Response = ( {tweet} ) => {

  return (
    <Container style={{marginTop:'5px', marginBottom:'5px'}} >
      <Row>
        <Col md={{ size:6, offset: 3}}>
          <Card>
            <CardBody>
              <img src={egg} /><br/>
              <strong>You</strong>
              <CardText>{tweet.content}</CardText>
              <CardSubtitle>{tweet.date}</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Response
