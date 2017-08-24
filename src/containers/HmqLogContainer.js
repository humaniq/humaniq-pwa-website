import {connect} from 'react-redux';
import SE_HmqLog from 'SE_HmqLog'

function mapStateToProps( state ) {
  const {entities} = state.hmqLog

  return {entities};
}

export default connect(mapStateToProps)(SE_HmqLog);
