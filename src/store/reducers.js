import { combineReducers } from 'redux'
import { postsBySubreddit, selectedSubreddit } from './root/reducers'
import { post } from './post-detail/reducers'

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  post,
})

export default rootReducer
