import {START, SUCCESS, REQUEST, FAIL, HMQ_MARKETS} from 'constants'

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
      return {...hmqMarkets, entities: data}
    case REQUEST + HMQ_MARKETS + FAIL:
      return {...hmqMarkets, loading: true}
  }
  return hmqMarkets;
};
