export default (arr) => {
  return arr.map(({address, walletRank, hmqPercentage, totalTransactions, balance}) =>({
    address: address,
    rank: walletRank,
    pecentage: (+ hmqPercentage).toFixed(2),
    txns: totalTransactions,
    usdAmount: (+ balance.usd).toFixed(2),
    hmqAmount: (+ balance.hmq).toFixed(2)
  }))
}