export default function tweetsReducer(state = { user: {tweets: [], selected_tweet: {responses: []}} }, action) {

  switch(action.type) {
    case 'FETCH_USER':
      return { user: action.payload }
    case 'SET_SELECTED_TWEET':
      return { user: {tweets: [], selected_tweet: action.payload} }
    case 'POST_RESPONSE':
      return { user: {tweets: [], selected_tweet: action.payload} }
    default:
      return state
  }
}
