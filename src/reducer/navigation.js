import {SET, OPEN_PAGE} from 'constants'

const initNavigation = {
  page: undefined
}

export default (navigation = initNavigation, {type, data}) => {

  switch (type) {
    case SET + OPEN_PAGE:
      return {...navigation, page:data}
  }
  return navigation;
};