import { START, SUCCESS, FAIL } from 'store/constants'

export function typesArray(type) {
  return [
    type + START,
    type + SUCCESS,
    type + FAIL,
  ]
}