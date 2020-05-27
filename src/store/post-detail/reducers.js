import {
  REQUEST_POST,
  RECEIVE_POST,
} from './actions'

export function post(
  state = {
    isFetching: false,
    post: null,
    comments: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        post: action.post,
        comments: action.comments,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
