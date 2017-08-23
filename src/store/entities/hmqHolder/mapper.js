import {numberFormat} from 'utils'

export default ({totalTransactions, balance, address}) => ({
  totalTransactions,
  balance: `${numberFormat(balance.hmq)} HMQ ($${numberFormat(+balance.usd, 2)})`,
  address
})