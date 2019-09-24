import React from 'react'
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
import { setSelectedTweet } from '../actions/setSelectedTweet'

class Tweet extends React.Component {

  handleClick = event => {
    let tweet_id = event.target.value
    event.preventDefault();
    this.props.setSelectedTweet(tweet_id)
    this.props.history.push(`/tweets/${tweet_id}`)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size:6, offset: 3}}>
            <Card>
              <CardImg />
              <CardBody>
                <CardText>{this.props.tweet.content}</CardText>
                <CardSubtitle>{this.props.tweet.date}</CardSubtitle>
                <Button type='submit' value={this.props.tweet.id} onClick={event => this.handleClick(event)}>Respond to this tweet</Button >
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(connect(null, { setSelectedTweet })(Tweet))
