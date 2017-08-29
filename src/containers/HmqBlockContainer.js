import {connect} from 'react-redux';
import SE_HmqBlock from 'SE_HmqBlock'

function mapStateToProps( state ) {
  const {loaded, blockNumber, height, fromNow, timeStamp, hash, parentHash, difficulty, gasLimit, gasUsed} = state.hmqBlock

  return {loaded, blockNumber, height, fromNow, timeStamp, hash, parentHash, difficulty, gasLimit, gasUsed};
}

export default connect(mapStateToProps)(SE_HmqBlock);
