export function setSelectedTweet(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/tweets/${id}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: 'SET_SELECTED_TWEET',
      payload: data
    }))
  };
}
