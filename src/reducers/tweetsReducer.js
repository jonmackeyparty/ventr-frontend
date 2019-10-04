export default function tweetsReducer(state = {user: {
    tweets: [], selected_tweet: {
        id: '', responses: [], apology: {content:'', date:''}
      }
    }
  }, action) {

  switch(action.type) {
    case 'POST_USER':
      return { user: {...action.payload, selected_tweet: {...state.user.selected_tweet} }}
    case 'SET_SELECTED_TWEET':
      // debugger;
      return { user: {...state.user, selected_tweet: {...action.payload, apology: {content:'', date:''}}} }
    case 'POST_RESPONSE':
      return { user: {...state.user, selected_tweet: {...action.payload, apology: {content:'', date:''}}} }
    case 'GET_APOLOGY':
      // debugger;
      console.log({...state.user})
      return { user: {...state.user, selected_tweet: action.payload} }
    default:
      return state
  }
}
