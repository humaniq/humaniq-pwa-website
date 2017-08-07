import { createFetchActions } from 'store/helpers'
import { BACKEND_CALL } from 'store/middleware/humaniqBackendApi'
import { ENPOINT_AMBASSADORS_LIST } from 'store/constants/api'
import { AMBASSADORS } from 'store/constants'

export function fetchAmbassadors () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENPOINT_AMBASSADORS_LIST,
      method: 'GET',
      types: createFetchActions(AMBASSADORS)
    }
  })
}
