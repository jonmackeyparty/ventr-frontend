export default function tweetsReducer(state = { user: {tweets: [], selected_tweet: {}} }, action) {

  switch(action.type) {
    case 'FETCH_USER':
      debugger;
      return { user: action.payload }
    case 'SET_SELECTED_TWEET':
      debugger;
      return { user: {tweets: [], selected_tweet: action.payload} }
    default:
      return state
  }
}
