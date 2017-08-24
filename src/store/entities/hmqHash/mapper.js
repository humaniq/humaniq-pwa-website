// import {numberFormat} from 'utils'
import moment from 'moment'

export default ({info, amount, fee, gas, blockchain}) => {
  const _time = moment(info.timestampIso, 'YYYYMMDDTHHmmss[Z]')

  return({
    txHash: info.hash,
    block: blockchain.blockNumber,
    numberConfirmations: blockchain.numberConfirmations,
    fromNow: _time.fromNow(),
    timeStamp: _time.format('MMM-DD-YYYY h:mm:ss a +UTC'),
    from: info.senderAddress,
    to: info.receiverAddress,
    value: `${(+ amount.usd).toFixed(2)} ETH ($${(+ amount.usd).toFixed(2)})`,
    // gasLimit:
    fee: `${(+ fee.eth).toFixed(8)} 0.00224711 ETH ($${(+ fee.usd).toFixed(2)})`,
    usedByTransaction: gas.usedByTransaction,
    status: info.status
  })
}


// blockNumber:4197049
// timestampIso:"2017-08-24T04:22:04Z"
// hash:"0x49e7e74b25f3a2643dc3ea83ddc45134a09e2260f5e8acec2c94c35335957b0d"
// parentHash:"0xe10da4e23ba24b47742c069380dab81f328c633bdfd236fb11279920a253896c"
// difficulty:1809404073379822
// gasLimit:6712392
// gasUsed:5965889
// transactionBlockCount:1
// initdata:"4197049"