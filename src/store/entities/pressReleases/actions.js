import { createFetchActions } from 'helpers'
import { PRESS_RELEASES } from 'store/constants'
import { BACKEND_CALL } from 'middleware/humaniqBackendApi'
import { ENDPOINT_PRESS_RELEASES } from 'constants/api'

export function fetchPressReleases () {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_PRESS_RELEASES,
      method: 'GET',
      types: createFetchActions(PRESS_RELEASES),
    }
  })
}
