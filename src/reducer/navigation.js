import {SET, MENU, OPEN, CLOSE, TOGGLE, OPEN_PAGE} from 'constants'

const initNavigation = {
  page: undefined,
  isMenuOpened: false
}

export default (navigation = initNavigation, {type, data}) => {

  switch (type) {
    case SET + OPEN_PAGE:
      return {...navigation, page:data}
    case OPEN + MENU:
      return {...navigation, isMenuOpened:true}
    case CLOSE + MENU:
      return {...navigation, isMenuOpened:false}
    case TOGGLE + MENU:
      const isMenuOpened = !navigation.isMenuOpened
      return {...navigation, isMenuOpened}
  }
  return navigation;
};