import {numberFormat} from 'utils'

export default (data) => {
  let preEntities = []
  for (var key in data) {
    if(data[key]) preEntities.push(data[key])
  }
  const entities = preEntities.map(({name, link, hmqVolumeRank, marketPair, tokenValue, lastHours24}) => ({
    address:name,
    url: link,
    rank:hmqVolumeRank,
    price: `$ ${(+ tokenValue.usd).toFixed(5)}`,
    pair: `${marketPair.first}\\${marketPair.second}`,
    usdAmount: numberFormat(+lastHours24.tradesVolume.usd, 2),
    hmqAmount: numberFormat(+lastHours24.tradesVolume.hmq, 2)
  }))

  return({
    entities
  })
}
