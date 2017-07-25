import {BACKEND_CALL} from 'middleware/humaniqBackendApi'
import {ENDPOINT_JOIN_FORM, ENDPOINT_SUBSCRIBE_FORM} from 'constants/api'
import {START, SUCCESS, FAIL, POST, JOIN_FORM, SUBSCRIBE_FORM} from 'constants'

export function submit(formName, data) {
  let endpoint, form;
  switch(formName){
    case 'join':
      endpoint = ENDPOINT_JOIN_FORM
      form = JOIN_FORM
      break;
    case 'subscribe':
      endpoint = ENDPOINT_SUBSCRIBE_FORM
      form = SUBSCRIBE_FORM
  }

  return ({
    [BACKEND_CALL]: {
      endpoint,
      method: 'POST',
      payload: data,
      types: [
        POST + form + START,
        POST + form + SUCCESS,
        POST + form + FAIL,
      ]
    }
  })
}

