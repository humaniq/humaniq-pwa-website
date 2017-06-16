import {combineReducers} from 'redux'
import posts from './posts'
import post from './post'
import staticContent from './staticContent'
import navigation from './navigation'

export default combineReducers({
  post,
  posts,
  staticContent,
  navigation
});
