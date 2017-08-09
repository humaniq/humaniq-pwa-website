import { START, SUCCESS, FAIL, POST } from 'store/constants'

export default function (entity) {
  return [
    POST + entity + START,
    POST + entity + SUCCESS,
    POST + entity + FAIL,
  ]
}