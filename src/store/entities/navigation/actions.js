import {SET, MENU, OPEN, CLOSE, TOGGLE, OPEN_ROUTE, HMQ_SECTION} from 'constants'

export function setRoute(str) {
  const data = str.split('/').filter(entry => entry.trim() != '')
  return ({
    type: SET + OPEN_ROUTE,
    data
  })
}

export function setHmqSection(data) {
  return ({
    type: SET + HMQ_SECTION,
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

export function toggleMenu(){
  return ({
    type: TOGGLE + MENU
  })
}