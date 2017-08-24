import {SET, MENU, OPEN, CLOSE, TOGGLE, OPEN_ROUTE, HMQ_SECTION} from 'constants'

const initNavigation = {
  openRoute: [],
  isMenuOpened: false,
  hmqSection: ''
}

export default (navigation = initNavigation, {type, data}) => {

  switch (type) {
    case SET + OPEN_ROUTE:
      return {...navigation, openRoute:data}
    case OPEN + MENU:
      return {...navigation, isMenuOpened:true}
    case CLOSE + MENU:
      return {...navigation, isMenuOpened:false}
    case TOGGLE + MENU:
      const isMenuOpened = !navigation.isMenuOpened
      return {...navigation, isMenuOpened}
    case SET + HMQ_SECTION:
      return {...navigation, hmqSection:data}
  }
  return navigation;
};