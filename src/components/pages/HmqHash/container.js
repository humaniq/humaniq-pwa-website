import {connect} from 'react-redux';
import page from './page'

function mapStateToProps( state ) {
  const {loading, loaded, txHash, block, numberConfirmations, fromNow, timeStamp, from, to, value, fee, usedByTransaction} = state.hmqHash

  return {loading, loaded, txHash, block, numberConfirmations, fromNow, timeStamp, from, to, value, fee, usedByTransaction};
}

export default connect(mapStateToProps)(page);
