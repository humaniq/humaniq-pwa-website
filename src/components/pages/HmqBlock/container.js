import {connect} from 'react-redux';
import page from './page'

function mapStateToProps( state ) {
  const {loading, loaded, blockNumber, height, fromNow, timeStamp, hash, parentHash, difficulty, gasLimit, gasUsed} = state.hmqBlock

  return {loading, loaded, blockNumber, height, fromNow, timeStamp, hash, parentHash, difficulty, gasLimit, gasUsed};
}

export default connect(mapStateToProps)(page);
