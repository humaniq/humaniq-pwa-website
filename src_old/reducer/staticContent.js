import {REQUEST, START, SUCCESS, FAIL, STATIC_DATA} from 'constants'

const initStaticContent = {
  indexPageTitle: '',
  mainTagline: '',
  mainEmail: '',
}

export default (staticContent = initStaticContent, {type, data}) => {

  switch (type) {
    case REQUEST + STATIC_DATA + START:
      return {...staticContent, loading: true}
    case REQUEST + STATIC_DATA + SUCCESS:
      return {...staticContent, loading: false, loaded: true, ...data}
    case REQUEST + STATIC_DATA + FAIL:
      return {...staticContent, loading: false}
  }
  return staticContent
}