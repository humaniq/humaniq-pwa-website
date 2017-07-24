import {SUCCESS, REQUEST, HMQ_TRANSACTIONS} from 'constants'
import {rnd} from 'utils'
import LastDate from 'utils/last'

function genTransaction(){
  const lastDate = new LastDate()
  const hmqAmount = Math.round(Math.random() * 1000)
  return({
    txHash: '0x' + rnd.str(22),
    block: rnd.num(5),
    from: '0x' + rnd.str(41),
    to: '0x' + rnd.str(41),
    time: lastDate.create().format(),
    hmqAmount: Math.round(Math.random() * 1000),
    usdAmount: Math.round(hmqAmount * 16) / 100
  })
}

function genTransactions(number){
  const _res = []
  for(let i = 0; i< number; i++){
    _res.push(genTransaction())
  }
  return(_res)
}


export function requestHmqTransactions() {
  return ({
    type: REQUEST + HMQ_TRANSACTIONS + SUCCESS,
    data: genTransactions(20)
  })
}


