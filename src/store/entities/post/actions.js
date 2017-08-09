import {BUTTER_CMS_CALL} from 'store/middleware/butterCmsApi'
import {CLOSE, POST} from 'store/constants'

export function fetchPost(id) {
  return ({
    [BUTTER_CMS_CALL]: {
      butter: POST,
      data:{id}
    }
  })
}

export function closePost() {
  return {
    type: CLOSE + POST
  }
}