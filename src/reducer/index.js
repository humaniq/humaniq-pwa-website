import {combineReducers} from 'redux'
import posts from './posts'
import post from './post'
import staticContent from './staticContent'

export default combineReducers({
  post,
  posts,
  staticContent
});
