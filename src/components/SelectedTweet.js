import React from 'react'
import { Route } from 'react-router-dom'
import ResponsesContainer from '../containers/ResponsesContainer'
import ApologyCreator from './ApologyCreator';
export default class SelectedTweet extends React.Component {

  // componentDidUpdate(prevProps) {
  //   debugger;
  // }

  render() {
    return (
      <div>
        {this.props.selected_tweet !== null && this.props.selected_tweet.content !== undefined &&
          <div>
            <li><br/><strong>Content:</strong> {this.props.selected_tweet.content}<br/><strong>Date: </strong>{this.props.selected_tweet.date}</li>
            <ResponsesContainer selected_tweet={this.props.selected_tweet} />
            <ApologyCreator />
          </div>
        }
      </div>
    );
  }
}
