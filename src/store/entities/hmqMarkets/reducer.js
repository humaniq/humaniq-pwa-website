import {START, SUCCESS, REQUEST, FAIL, HMQ_MARKETS} from 'constants'
import mapper from './mapper'

const hmqMarketsInit = {
  loading: false,
  loaded: false,
  entities: []
}

export default (hmqMarkets = hmqMarketsInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_MARKETS + START:
      return {...hmqMarkets, loading: true}
    case REQUEST + HMQ_MARKETS + SUCCESS:
      console.log(typeof data)
      return {...hmqMarkets, loading: false, loaded: true, ...mapper(data)}
    case REQUEST + HMQ_MARKETS + FAIL:
      return {...hmqMarkets, loading: false}
  }
  return hmqMarkets;
};
