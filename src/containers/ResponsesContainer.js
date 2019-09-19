import React from 'react';
import Responses from '../components/Responses'
import ResponseCreator from '../components/ResponseCreator'

class ResponsesContainer extends React.Component {

  render() {
    return(
      <div>
        <ResponseCreator tweet_id={this.props.tweet_id}/>
        <Responses />
      </div>
    )
  }
}

export default ResponsesContainer
