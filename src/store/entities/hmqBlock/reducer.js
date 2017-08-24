import {START, SUCCESS, REQUEST, FAIL, HMQ_BLOCK} from 'constants'
import mapper from './mapper'

const hmqBlockInit = {
  loading: false,
  loaded: false,
  blockNumber: '',
  height: '',
  fromNow: '',
  timeStamp: '',
  hash: '',
  parentHash: '',
  difficulty: '',
  gasLimit: '',
  gasUse: ''
}

export default (hmqBlock = hmqBlockInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_BLOCK + START:
      return {...hmqBlock, loading: true}
    case REQUEST + HMQ_BLOCK + SUCCESS:
      return {...hmqBlock, loading: false, loaded: true, ...mapper(data)}
    case REQUEST + HMQ_BLOCK + FAIL:
      return {...hmqBlock, loading: false}
  }
  return hmqBlock;
};
