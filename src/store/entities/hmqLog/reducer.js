import {START, SUCCESS, REQUEST, FAIL, HMQ_LOG} from 'constants'
import mapper from './mapper'
import {arrayUnique} from 'utils'

const hmqLogInit = {
  loading: false,
  loaded: false,
  entities: [],
}

export default (hmqLog = hmqLogInit, { type, data } ) => {

  switch (type) {
    case REQUEST + HMQ_LOG + START:
      return {...hmqLog, loading: true}
    case REQUEST + HMQ_LOG + SUCCESS:
      const entities = arrayUnique(hmqLog.entities.concat(mapper(data.transactions)));
      return {...hmqLog, loading: false, loaded: true, entities}
    case REQUEST + HMQ_LOG + FAIL:
      return {...hmqLog, loading: false}
  }
  return hmqLog;
};


