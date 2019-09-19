export default function tweetsReducer(state = { user: {} }, action) {

  switch(action.type) {
    case 'FETCH_USER':
      return { user: action.payload }
    default:
      return state
  }
}
