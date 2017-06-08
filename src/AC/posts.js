import {BUTTER_API} from 'middleware/apiButter'
import {POSTS} from 'constants'

export function fetchPosts() {
  return ({
    [BUTTER_API]: {
      butter: POSTS
    }
  })
}