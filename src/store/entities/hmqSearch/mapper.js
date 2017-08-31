export default (dataArray) => {

  const entities = dataArray.map(({type, value}) => {
    if(type === 'walletAddress'){
      return({
        address: value,
        type: 'holder'
      })
    }else {
      return ({
        txHash: value,
        type: 'log'
      })
    }
  })
  return entities
}