import {START, SUCCESS, REQUEST, FAIL, HMQ_TRANSACTIONS} from 'constants'

const transactionsInit = {
  loading: false,
  loaded: true,
  entities: []
}

export default (transactions = transactionsInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_TRANSACTIONS + START:
      return {...transactions, loading: true}
    case REQUEST + HMQ_TRANSACTIONS + SUCCESS:
      return {loading: false, loaded: true, entities:[...transactions.entities, ...data]}
    case REQUEST + HMQ_TRANSACTIONS + FAIL:
      return {...transactions, loading: false}
  }
  return transactions;
};
