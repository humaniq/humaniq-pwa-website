import { createPostActions, /* createFetchActions */} from 'helpers'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_PERSONAL_REFERRER, /* ENDPOINT_PERSONAL_DATA, */ ENDPOINT_PERSONAL_HEADERS } from 'constants/api'
import { SUCCESS, FETCH, BY_REFERENCE } from 'store/constants'

export function subscribeByReference (code, phone_number) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_PERSONAL_REFERRER + code,
      method: 'POST',
      headers: ENDPOINT_PERSONAL_HEADERS,
      payload: phone_number,
      type: 'form',
      types: createPostActions(BY_REFERENCE),
    }
  })
}

/**
 * TODO: change with real request
 */
export function fetchPersonalData () {
  return ({
    type: FETCH + BY_REFERENCE + SUCCESS,
    data: {
      invitationCode: 'c4e393a6-ec4c-4296-bfd7-cfe22b64f763',
      name: {
        first_name: 'Anton',
        last_name: 'Anton'
      },
      phone_number: {
        country_code: '1',
        phone_number: '4164647135'
      },
      photo_url: '/img/1234.png'
    }
  })
}

// this is working action creator please don't remove it....

// export function fetchPersonalData(invitationCode) {
//   return ({
//     [BACKEND_CALL]: {
//       endpoint: ENDPOINT_PERSONAL_DATA + invitationCode,
//       headers: ENDPOINT_PERSONAL_HEADERS,
//       method: 'GET',
//       types: createFetchActions(BY_REFERENCE),
//       data: invitationCode
//     }
//   })
// }