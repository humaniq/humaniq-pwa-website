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

  let _rates = rates.map(({timestampIso, rate}) => {
    if(rate && rate.usd){
      return ({timestampIso, rate})
    }else{
      return;
    }
  })

  _rates = _rates.filter(function(n){ return n != undefined });


  let min = 9999999999
  _rates.forEach(({rate}) => {
    if(rate && min > rate.usd) min = rate.usd
  })

  const delta = min * 0.9
  const entities = _rates.map( ({timestampIso, rate}) => {

    const ethString = rate.eth ? `${(+ rate.eth).toFixed(5)} ETH)` : ''

    return {
      date: moment(timestampIso, 'YYYYMMDDTHHmmss[Z]').format('YYYY-MM-DD, HH:mm:ss'),
      dateShow: moment.utc(timestampIso, 'YYYYMMDDTHHmmss[Z]').local().format(format[period]),
      valueShow: `$ ${(+ rate.usd).toFixed(3)} ${ethString}`,
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