import {START, SUCCESS, REQUEST, FAIL, HMQ_GRAPH} from 'constants'
import mapper from './mapper'

const hmqGraphInit = {
  loading: false,
  loaded: true,
  entities: [],
  period: ''
}

export default (hmqGraph = hmqGraphInit, { type, data }) => {

  switch (type) {
    case REQUEST + HMQ_GRAPH + START:
      return {...hmqGraph, loading: true}
    case REQUEST + HMQ_GRAPH + SUCCESS:
      const period = data.initdata
      return {...hmqGraph, loading: false, loaded: true,
        ...mapper(data.rates, period),
      }
    case REQUEST + HMQ_GRAPH + FAIL:
      return {...hmqGraph, loading: false}
  }

  return hmqGraph;
};