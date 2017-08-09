import { START, SUCCESS, FAIL, FETCH } from 'store/constants'

export default function (entity) {
  return [
    FETCH + entity + START,
    FETCH + entity + SUCCESS,
    FETCH + entity + FAIL,
  ]
}