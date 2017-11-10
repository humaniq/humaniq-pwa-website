import {SET, MENU, POPUP, OPEN, THEME, CLOSE, TOGGLE, OPEN_ROUTE, HMQ_SECTION} from 'store/constants'

const initNavigation = {
  openRoute: [],
  isMenuOpened: false,
  isPopupOpened: false,
  popupType: null,
  hmqSection: '',
  theme: 'bright'
}

export default (navigation = initNavigation, {type, data}) => {

  switch (type) {
    case SET + THEME:
      return {...navigation, theme:data}
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
    case OPEN + POPUP:
      return {...navigation, isPopupOpened:true, popupType: data}
    case CLOSE + POPUP:
      return {...navigation, isPopupOpened:false, popupType: null}
  }
  return navigation;
};