import {BUTTER_API} from 'middleware/apiButter'
import {CLOSE, POST} from 'constants'

export function fetchPost(id) {
  return ({
    [BUTTER_API]: {
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