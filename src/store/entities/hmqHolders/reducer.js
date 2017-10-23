import {START, SUCCESS, REQUEST, FAIL, HMQ_HOLDERS} from 'store/constants'
import mapper from './mapper'
import {arrayUnique} from 'utils'

const hmqHoldersInit = {
  loading: false,
  loaded: false,
  entities: [],
  lastOffset: undefined
}

export default (hmqHolders = hmqHoldersInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_HOLDERS + START:
      return {...hmqHolders, loading: true}
    case REQUEST + HMQ_HOLDERS + SUCCESS:
      const entities = arrayUnique(hmqHolders.entities.concat(mapper(data.wallets)));
      return {...hmqHolders, loading: false, loaded: true, entities, lastOffset: data.initdata}
    case REQUEST + HMQ_HOLDERS + FAIL:
      return {...hmqHolders, loading: false}
  }
  return hmqHolders;
};


