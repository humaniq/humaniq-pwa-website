import {HMQ_SEARCH, START, SUCCESS, FAIL, CLEAN} from 'constants'

const hmqSearchInit = {
  request: '',
  total:0
}

export default (hmqSearch = hmqSearchInit, {type, data}) => {

  switch (type) {
    case HMQ_SEARCH + START:
      return {...hmqSearch, loading: true, request: data}
    case HMQ_SEARCH + SUCCESS:
      return {
        ...hmqSearch,
        loading: false,
        loaded: true
      }
    case HMQ_SEARCH + FAIL:
      return {...hmqSearchInit}
    case CLEAN + HMQ_SEARCH:
      return {...hmqSearchInit}
  }
  return hmqSearch;
};