import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_Hmq from 'SE_Hmq'
import {requestHmqTransactions} from 'store/entities/transactions/actions'

function mapStateToProps( state ) {
  const {hmq: chartProps, loaded, transactions:{entities:transactions}, expStatistic} = state

  return {chartProps, transactions, loaded, expStatistic};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({requestHmqTransactions}, dispatch)
  return {...actions};
}
export default connect(mapStateToProps, mapDispatchToProps)(SE_Hmq);
