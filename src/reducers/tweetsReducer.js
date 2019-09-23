export default function tweetsReducer(state = { user: {tweets: [], selected_tweet: {id: '', responses: []}} }, action) {

  switch(action.type) {
    case 'POST_USER':
      return { user: action.payload }
    case 'SET_SELECTED_TWEET':
      return { user: {...state.user, selected_tweet: action.payload} }
    case 'POST_RESPONSE':
      return { user: {...state.user, selected_tweet: action.payload} }
    default:
      return state
  }
}
