import { START, SUCCESS, FAIL, REQUEST } from 'store/constants'

export default function (entity) {
  return [
    REQUEST + entity + START,
    REQUEST + entity + SUCCESS,
    REQUEST + entity + FAIL,
  ]
}