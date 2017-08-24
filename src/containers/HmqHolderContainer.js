import {connect} from 'react-redux';
import SE_HmqHolder from 'SE_HmqHolder'

function mapStateToProps( state ) {
  const {totalTransactions, balance, address, entities} = state.hmqHolder

  return {totalTransactions, balance, address, entities};
}

export default connect(mapStateToProps)(SE_HmqHolder);
