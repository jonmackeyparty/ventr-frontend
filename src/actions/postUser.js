export function postUser(username) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users`, {
      headers: {
        'Content-Type': 'text/html'
      },
      method: 'POST',
      body: username
    })
    .then(response => response.json())
    .then(data => dispatch({
      type: 'POST_USER',
      payload: data
    }))
  }
}
