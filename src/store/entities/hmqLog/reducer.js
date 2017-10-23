import {START, SUCCESS, REQUEST, FAIL, HMQ_LOG} from 'store/constants'
import mapper from './mapper'

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
      return {...hmqLog, loading: false, loaded: true, ...mapper(data, hmqLog.entities)}
    case REQUEST + HMQ_LOG + FAIL:
      return {...hmqLog, loading: false}
  }
  return hmqLog;
};


