export function postResponse(tweet_response, tweet_id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/selected_tweets/${tweet_id}/responses`, {
      headers: {
        'Content-Type': 'text/html'
      },
      method: 'POST',
      body: tweet_response
    })
    .then(response => response.json())
    .then(data => dispatch({
      type: 'POST_RESPONSE',
      payload: data
    }))
  };
}
