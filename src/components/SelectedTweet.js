import React from 'react'
import ResponsesContainer from '../containers/ResponsesContainer'

export default class SelectedTweet extends React.Component {

  componentDidUpdate(prevProps) {
    debugger;
  }

  render() {
    return (
        <div>
        {this.props.selected_tweet !== null && this.props.selected_tweet.content !== undefined &&
          <div>
            <li><br/><strong>Content:</strong> {this.props.selected_tweet.content}<br/><strong>Date: </strong>{this.props.selected_tweet.date}</li>
            <ResponsesContainer tweet_id={this.props.selected_tweet.id}/>
          </div>
        }
        </div>
    );
  }
}
