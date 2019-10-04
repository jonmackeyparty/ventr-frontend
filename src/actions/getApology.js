export function getApology(tweet_id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/selected_tweets/${tweet_id}/apology`)
    .then(response => response.json())
    .then(data => dispatch({
      type: 'GET_APOLOGY',
      payload: data
    }))
  };
}
