import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_Hmq from 'SE_Hmq'
import {requestHmqTransactions} from 'AC/hmqExp'

function mapStateToProps( state ) {
  const {hmq:{data: chartProps}, transactions:{entities:transactions}} = state
  return {chartProps, transactions};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({requestHmqTransactions}, dispatch)
  return {...actions};
}
export default connect(mapStateToProps, mapDispatchToProps)(SE_Hmq);
