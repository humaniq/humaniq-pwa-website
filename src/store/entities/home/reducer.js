import {START, REQUEST, SUCCESS, FAIL, USERS_NUMBER} from 'store/constants'

const initHome = {
  users_number: 28000
}

export default (home = initHome, {type, data}) => {

  switch (type) {
    case REQUEST + USERS_NUMBER + START:
      return {...home, loading: true}
    case REQUEST + USERS_NUMBER + SUCCESS:
      return {...home, loading: false, loaded: true, users_number:data.total_installations}
    case REQUEST + USERS_NUMBER + FAIL:
      return {...home, loading: false}
  }
  return home;
};