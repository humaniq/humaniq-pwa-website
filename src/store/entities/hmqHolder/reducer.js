import {START, SUCCESS, REQUEST, FAIL, HMQ_HOLDER} from 'constants'
import mapper from './mapper'

const hmqHolderInit = {
  loading: false,
  loaded: false,
  totalTransactions: 0,
  balance: 'no data',
  address: ''
}

export default (hmqHolder = hmqHolderInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_HOLDER + START:
      return {...hmqHolder, loading: true}
    case REQUEST + HMQ_HOLDER + SUCCESS:
      return {...hmqHolder, loading: false, loaded: true, ...mapper(data)}
    case REQUEST + HMQ_HOLDER + FAIL:
      return {...hmqHolder, loading: false}
  }
  return hmqHolder;
};
