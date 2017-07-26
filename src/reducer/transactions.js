import {START, SUCCESS, REQUEST, FAIL, HMQ_TRANSACTIONS, HMQ_TRANSACTION_UPDATE} from 'constants'

const transactionsInit = {
  loading: false,
  loaded: true,
  entities: []
}

const transactionMatcher = newTransaction => transaction => {
  return transaction.info && transaction.info.hash === newTransaction.info.hash
}

const mergeTransactionInTransactions = (newTransaction, transactions) => {
  const currentIndex = transactions.findIndex(transactionMatcher(newTransaction));
  if (currentIndex < 0) {
    return [...transactions, newTransaction];
  }
  const updatedTransactions = [...transactions];
  updatedTransactions[currentIndex] = newTransaction;
  return updatedTransactions;
}

export default (transactions = transactionsInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_TRANSACTIONS + START:
      return {...transactions, loading: true}
    case REQUEST + HMQ_TRANSACTIONS + SUCCESS:
      console.log([...transactions.entities, ...data]);
      return {loading: false, loaded: true, entities:[...transactions.entities, ...data]}
    case REQUEST + HMQ_TRANSACTIONS + FAIL:
      return {...transactions, loading: false}
    case HMQ_TRANSACTION_UPDATE:
      console.log(transactions.entities);
      console.log(data);
      const t = mergeTransactionInTransactions(data, transactions.entities);
      console.log(t);
      return {loaded: true, loading: false, entities: mergeTransactionInTransactions(data, transactions.entities)}
  }
  return transactions;
};
