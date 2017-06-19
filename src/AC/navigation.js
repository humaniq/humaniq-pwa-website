import {SET, OPEN_PAGE} from 'constants'

export function setPage(data) {
  return ({
    type: SET + OPEN_PAGE,
    data
  })
}