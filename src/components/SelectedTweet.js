import React from 'react'
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default class SelectedTweet extends React.Component {

  // componentDidUpdate(prevProps) {
  //   debugger;
  // }

  render() {
    return (
      <>
        {this.props.selected_tweet !== null && this.props.selected_tweet.content !== undefined &&
          <Container>
            <Row>
              <Col md={{ size:6, offset: 3}}>
                <Card>
                  <CardImg />
                  <CardBody>
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
