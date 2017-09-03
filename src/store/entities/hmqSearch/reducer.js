import {HMQ_SEARCH, START, SUCCESS, FAIL, CLEAN} from 'constants'
import mapper from './mapper'

const hmqSearchInit = {
  loading: false,
  loaded: false,
  entities: [],
  searchTerm: ''
}

export default (hmqSearch = hmqSearchInit, {type, data}) => {

  switch (type) {
    case HMQ_SEARCH + START:
      return {...hmqSearch, loading: true, request: data}
    case HMQ_SEARCH + SUCCESS:

      return {
        ...hmqSearch,
        loading: false,
        loaded: true,
        request: data.initdata,
        entities: mapper(data.searchResults),
      }
    case HMQ_SEARCH + FAIL:
      return {...hmqSearch, loading: false}
    case CLEAN + HMQ_SEARCH:
      return {...hmqSearchInit}
  }
  return hmqSearch;
};