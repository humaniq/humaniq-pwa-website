import {START, SUCCESS, REQUEST, FAIL, HMQ_HOLDER, HMQ_HOLDER_T} from 'constants'
import mapper from './mapper'
import mapper1 from './mapper1'

const hmqHolderInit = {
  loading: false,
  loaded: false,
  totalTransactions: 0,
  balance: 'no data',
  address: '',
  entities: []
}

export default (hmqHolder = hmqHolderInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_HOLDER + START:
      return {...hmqHolder, loading: true}
    case REQUEST + HMQ_HOLDER + SUCCESS:
      return {...hmqHolder, loading: false, loaded: true, ...mapper(data)}
    case REQUEST + HMQ_HOLDER_T + SUCCESS:
      return {...hmqHolder, loading: false, loaded: true, entities:mapper1(data.transactions)}
    case REQUEST + HMQ_HOLDER + FAIL:
      return {...hmqHolder, loading: false}
  }
  return hmqHolder;
};
