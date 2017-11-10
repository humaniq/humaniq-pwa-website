import {SET, MENU, POPUP, THEME, OPEN, CLOSE, TOGGLE, OPEN_ROUTE, HMQ_SECTION} from 'store/constants'

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

export function setTheme(data) {
  return ({
    type: SET + THEME,
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

export function openPopup(data) {
  return ({
    type: OPEN + POPUP,
    data
  })
}

export function closePopup() {
  return ({
    type: CLOSE + POPUP
  })
}