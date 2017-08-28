import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux'
import SE_HmqLog from 'SE_HmqLog'
// import {fetchHmqLog} from 'store/entities/hmqHolders/actions'

function mapStateToProps( state ) {
  const {entities} = state.hmqLog

  return {entities};
}

export default connect(mapStateToProps)(SE_HmqLog);
