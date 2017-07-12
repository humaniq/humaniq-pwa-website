import {connect} from 'react-redux';
import SE_Partners from 'SE_Partners'

function mapStateToProps(state) {
  const {entities} = state.partners
  return {entities};
}

export default connect(mapStateToProps)(SE_Partners);