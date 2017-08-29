import {arrayUnique, numberFormat} from 'utils'

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


  return({
    entities,
    complete,
    next: nextTimestampIso,
  })
}