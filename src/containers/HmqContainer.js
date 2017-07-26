import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_Hmq from 'SE_Hmq'
import {requestHmqTransactions} from 'AC/hmqExp'

var numberFormat = function(n, dp){
  var e = '', s = e+n, l = s.length, b = n < 0 ? 1 : 0,
    i = s.lastIndexOf('.'), j = i == -1 ? l : i,
    r = e, d = s.substr(j+1, dp);
  while ( (j-=3) > b ) { r = ',' + s.substr(j, 3) + r; }
  return s.substr(0, j + 3) + r +
    (dp ? '.' + d + ( d.length < dp ?
      ('00000').substr(0, dp - d.length):e):e);
};

function mapStateToProps( state ) {
  const {hmq:{data: chartProps}, transactions:{entities:transactions, statistics}} = state
  const _tokenSupply = `${numberFormat(statistics.tokenSupply.hmq)} HMQ $ ${numberFormat(Math.round(statistics.tokenSupply.usd * 100) / 100)}`
  const _volume24 = `$ ${numberFormat(Math.round(statistics.lastHours24.tradesVolume.usd))} HMQ ${numberFormat(Math.round(statistics.lastHours24.tradesVolume.hmq *100)/ 100)}`
  const _tokenValue = `$ ${Math.round(statistics.tokenValue.usd * 10000) /10000} HMQ $ ${numberFormat(Math.round(statistics.tokenSupply.hmq * 1000000)/ 1000000)}`

  return {chartProps, transactions, statistics, my:{_tokenSupply, _tokenValue, _volume24}};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({requestHmqTransactions}, dispatch)
  return {...actions};
}
export default connect(mapStateToProps, mapDispatchToProps)(SE_Hmq);
