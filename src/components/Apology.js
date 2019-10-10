import React from 'react';
import {
  Container, Row, Col,
  Card,CardText, CardBody, CardSubtitle
} from 'reactstrap';

export default class Apology extends React.Component {

  render() {
    return (
      <>
        {this.props.user.selected_tweet.apology.content !== '' &&
          <Container style={{marginTop:'5px', marginBottom:'5px'}}>
            <Row>
              <Col md={{ size:6, offset: 3}}>
                <Card>
                  <CardBody>
                    <img src={this.props.user.avi_url} alt='twitter avi' /><br/>
                    <strong>{this.props.user.username}</strong>
                    <CardText>
                      {this.props.user.selected_tweet.apology.content}
                    </CardText>
                    <CardSubtitle>
                      {this.props.user.selected_tweet.apology.date}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        }
      </>
    )
  }
}
