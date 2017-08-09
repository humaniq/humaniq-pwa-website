import {BUTTER_CMS_CALL} from 'store/middleware/butterCmsApi'
import {POSTS} from 'store/constants'

export function fetchPosts() {
  return ({
    [BUTTER_CMS_CALL]: {
      butter: POSTS
    }
  })
}