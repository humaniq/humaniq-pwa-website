import {START, SUCCESS, REQUEST, FAIL, HMQ_HASH} from 'store/constants'
import mapper from './mapper'

const hmqHashInit = {
  loading: false,
  loaded: false,
}

export default (hmqHash = hmqHashInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_HASH + START:
      return {...hmqHash, loading: true}
    case REQUEST + HMQ_HASH + SUCCESS:
      return {...hmqHash, loading: false, loaded: true, ...mapper(data)}
    case REQUEST + HMQ_HASH + FAIL:
      return {...hmqHash, loading: false}
  }
  return hmqHash;
};
