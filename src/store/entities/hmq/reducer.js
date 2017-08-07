import {START, SUCCESS, REQUEST, FAIL, BLOCKCHAIN_EXCHANGE_RATES} from 'store/constants'

import moment from 'moment';

const hmqInit = {
  loading: false,
  loaded: true,
  '1h': [],
  '1d': [],
  '1w': [],
  '1m': [],
  '1y': [],
  'ALL': [],
}

const format = {
  '1h': 'll',
  '1d': 'MMM DD',
  '1w': 'MMM DD, h a',
  '1m': 'DD HH:mm:ss',
  '1y': 'HH:mm:ss',
  'ALL': 'L'
}

function addDateShow(rates){

  return( rates.map( ({timestampIso, rate, period}) => {
    return {
      date: moment(timestampIso, 'YYYYMMDDTHHmmss[Z]').format('YYYY-MM-DD, HH:mm:ss'),
      dateShow: moment(timestampIso, 'YYYYMMDDTHHmmss[Z]').format(format[period]),
      valueShow: `$ ${Math.round(rate.usd * 1000) / 1000} (${Math.round(rate.usd * 1000000 / 1000000)} ETH)`,
      value: Math.round(rate.eth * 1000000000)
    }
  }))
}

export default (hmq = hmqInit, { type, data }) => {

  switch (type) {
    case REQUEST + BLOCKCHAIN_EXCHANGE_RATES + START:
      return {...hmq, loading: true}
    case REQUEST + BLOCKCHAIN_EXCHANGE_RATES + SUCCESS:
      const period = data.initdata
      const entities = addDateShow(data.rates, period)
      return {...hmq, loading: false, loaded: true, [period]:entities}
    case REQUEST + BLOCKCHAIN_EXCHANGE_RATES + FAIL:
      return {...hmq, loading: false}
  }

  return hmq;
};


