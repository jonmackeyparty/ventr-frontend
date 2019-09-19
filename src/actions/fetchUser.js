export function fetchUser() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_USER',
      payload: data
    }))
  }
}
