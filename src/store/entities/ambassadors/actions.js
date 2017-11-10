import { createFetchActions } from 'helpers'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENPOINT_AMBASSADORS_LIST } from 'constants/api'
import { AMBASSADORS } from 'store/constants'

export function fetchAmbassadors () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENPOINT_AMBASSADORS_LIST,
      method: 'GET',
      types: createFetchActions(AMBASSADORS),
    }
  })
}
