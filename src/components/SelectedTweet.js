import React from 'react'

export default class SelectedTweet extends React.Component {

  componentDidUpdate(prevProps) {
    debugger;
  }

  render() {
    return (
        <div>
        {this.props.selected_tweet !== null && this.props.selected_tweet.content !== undefined &&
          <li><br/><strong>Content:</strong> {this.props.selected_tweet.content}<br/><strong>Date: </strong>{this.props.selected_tweet.date}</li>
        }
        </div>
    );
  }
}
