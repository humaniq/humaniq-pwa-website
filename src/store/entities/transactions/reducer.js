import {START, SUCCESS, REQUEST, FAIL, BLOCKCHAIN_TRANSACTIONS, BLOCKCHAIN_MARKETS} from 'store/constants'

const transactionsInit = {
  loading: false,
  loaded: false,
  entities: [],
  markets:[],
}

export default (transactions = transactionsInit, { type, data } ) => {

  switch (type) {
    case REQUEST + BLOCKCHAIN_TRANSACTIONS + START:
      return {...transactions, loading: true}
    case REQUEST + BLOCKCHAIN_TRANSACTIONS + SUCCESS:
      return {...transactions, loading: false, loaded: true, entities:[...transactions.entities, ...data]}
    case REQUEST + BLOCKCHAIN_TRANSACTIONS + FAIL:
      return {...transactions, loading: false}
    case REQUEST + BLOCKCHAIN_MARKETS + SUCCESS:
      return {...transactions, loading: false, loaded: true, makets:[...data]}

  }
  return transactions;
};
