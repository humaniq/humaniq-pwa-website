import {arrayUnique, numberFormat} from 'utils'
import moment from 'moment';

export default ({transactions, nextTimestampIso}, oldEntities) => {
  let entities, complete

  if(transactions.length === 0){
    complete = true
    entities = oldEntities
  } else {
    complete = false
    const newEntities = transactions.map(({info, amount, blockchain}) =>({
      txHash: info.hash,
      block: blockchain.blockNumber || undefined,
      from: info.senderAddress,
      to: info.receiverAddress,
      time: info.timestampIso,
      usdAmount: numberFormat(+ amount.usd, 2),
      hmqAmount: numberFormat(+ amount.hmq, 2),
      status: info.status
    }))
    entities = arrayUnique(oldEntities.concat(newEntities));
  }
  entities.sort(function (left, right) {
    return moment.utc(right.time, 'YYYYMMDDTHHmmss[Z]').diff(moment.utc(left.time, 'YYYYMMDDTHHmmss[Z]'))
  });
  return({
    entities,
    complete,
    next: nextTimestampIso,
  })
}