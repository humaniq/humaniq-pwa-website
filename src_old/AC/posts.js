import {BUTTER_CMS_CALL} from 'middleware/butterCmsApi'
import {POSTS} from 'constants'

export function fetchPosts() {
  return ({
    [BUTTER_CMS_CALL]: {
      butter: POSTS
    }
  })
}