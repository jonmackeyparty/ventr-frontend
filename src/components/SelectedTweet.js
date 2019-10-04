import React from 'react'
import {
  Container, Row, Col,
  Card, CardText, CardBody, CardSubtitle
} from 'reactstrap';

export default class SelectedTweet extends React.Component {

  render() {
    return (
      <>
        {this.props.selected_tweet !== null && this.props.selected_tweet.content !== undefined &&
          <Container style={{marginTop:'5px', marginBottom:'5px'}}>
            <Row>
              <Col md={{ size:6, offset: 3}}>
                <Card>
                  <CardBody>
                    <img src={this.props.url} alt='twitter avi' /><br/>
                    <strong>{this.props.username}</strong>
                    <CardText>{this.props.selected_tweet.content}</CardText>
                    <CardSubtitle>{this.props.selected_tweet.date}</CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        }
      </>
    );
  }
}
