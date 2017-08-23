import {connect} from 'react-redux';
import SE_HmqHolder from 'SE_HmqHolder'

function mapStateToProps( state ) {
  const {totalTransactions, balance, address} = state.hmqHolder

  return {totalTransactions, balance, address};
}

export default connect(mapStateToProps)(SE_HmqHolder);
