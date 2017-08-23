import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_HmqHome from 'SE_HmqHome'
import {requestHmqTransactions} from 'store/entities/transactions/actions'

function mapStateToProps( state ) {
  const {hmq: chartProps, loaded, transactions:{entities:transactions}, hmqStatistic} = state

  return {chartProps, transactions, loaded, hmqStatistic};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({requestHmqTransactions}, dispatch)
  return {...actions};
}
export default connect(mapStateToProps, mapDispatchToProps)(SE_HmqHome);
