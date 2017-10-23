import {START, SUCCESS, REQUEST, FAIL, HMQ_HOLDER, HMQ_HOLDER_T, CLEAN} from 'store/constants'
import mapper from './mapper'
import mapperT from './mapperT'
import {arrayUnique} from 'utils'
export const COUNT = 30

const hmqHolderInit = {
  loading: false,
  loaded: false,
  totalTransactions: 0,
  balance: 'no data',
  address: '',
  transactions: {
    entities: [],
    loading: false,
    loaded: false,
    complete: false,
    offset: 0,
    clean: false
  }
}

export default (hmqHolder = hmqHolderInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_HOLDER + START:
      return {...hmqHolder, loading: true, address:data}
    case REQUEST + HMQ_HOLDER + SUCCESS:
      return {...hmqHolder, loading: false, loaded: true, ...mapper(data)}
    case REQUEST + HMQ_HOLDER + FAIL:
      return {...hmqHolder, loading: false}
    case REQUEST + HMQ_HOLDER_T + START:
    case REQUEST + HMQ_HOLDER_T + SUCCESS:
    case REQUEST + HMQ_HOLDER_T + FAIL:
    case CLEAN + HMQ_HOLDER_T:
      return {...hmqHolder, transactions: hmqHolderT(hmqHolder.transactions, {type, data}, hmqHolder.totalTransactions, hmqHolder.address)}


  }
  return hmqHolder;
};

const hmqHolderT = (hmqHolderT, { type, data }, totalTransactions, address ) => {

  switch (type) {
    case CLEAN + HMQ_HOLDER_T:
      return {...hmqHolderInit.transactions, loading: hmqHolderT.loading}
    case REQUEST + HMQ_HOLDER_T + START:
      const clean = address !== data
      return {...hmqHolderT, loading: true, clean}
    case REQUEST + HMQ_HOLDER_T + SUCCESS:
      let entities, complete
      const oldEntities = hmqHolderT.entities

      if(data.transactions.length === 0){
        entities = oldEntities
        complete = true
      }else if(totalTransactions < COUNT){
        const newEntities = mapperT(data.transactions)
        entities = arrayUnique(oldEntities.concat(newEntities));
        complete = true
      } else {
        const newEntities = mapperT(data.transactions)
        entities = arrayUnique(oldEntities.concat(newEntities));
        complete = false
      }

      const offset = entities.length

      return {...hmqHolderT, loading: false, loaded: true, entities, complete, offset}
    case REQUEST + HMQ_HOLDER_T + FAIL:
      return {...hmqHolderT, loading: false}
  }
  return hmqHolderT;
};

//    entities = arrayUnique(oldEntities.concat(newEntities));
