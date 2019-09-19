export function fetchUser(username) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/search/${username}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_USER',
      payload: data
    }))
  }
}
