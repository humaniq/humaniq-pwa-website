import {SET, MENU, OPEN, CLOSE, TOGGLE, OPEN_PAGE} from 'constants'

export function setPage(data) {
  return ({
    type: SET + OPEN_PAGE,
    data
  })
}

export function openMenu() {
  return ({
    type: OPEN + MENU
  })
}

export function closeMenu() {
  return ({
    type: CLOSE + MENU
  })
}

export function toggleMenu() {
  return ({
    type: TOGGLE + MENU
  })
}