import moment from 'moment';

const format = {
  '3h': 'HH:mm:ss',
  '1d': 'MMM DD, HH:mm:ss',
  '1w': 'MMM DD, h a',
  '1m': 'DD HH:mm:ss',
  '1y': 'HH:mm:ss',
  'ALL': 'L'
}

export default (rates, period) => {

  let min = 9999999999
  rates.forEach(({rate}) => {
    if(min > rate.usd) min = rate.usd
  })

  const delta = min * 0.9
  const entities = rates.map( ({timestampIso, rate}) => {
    return {
      date: moment(timestampIso, 'YYYYMMDDTHHmmss[Z]').format('YYYY-MM-DD, HH:mm:ss'),
      dateShow: moment.utc(timestampIso, 'YYYYMMDDTHHmmss[Z]').local().format(format[period]),
      valueShow: `$ ${(+ rate.usd).toFixed(3)} (${(+ rate.usd).toFixed(5)} ETH)`,
      value: (rate.usd - delta) * 10000
    }
  })

  const same = entities.every((rate, i) => (
    i === 0 || rate.value === entities[i-1].value
  ));



  return({
    entities: entities.reverse(),
    period,
    same
  })
}