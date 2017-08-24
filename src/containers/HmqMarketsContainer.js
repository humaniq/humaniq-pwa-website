import {connect} from 'react-redux';
import SE_HmqMarkets from 'SE_HmqMarkets'

function mapStateToProps( state ) {
  const {entities} = state.hmqMarkets

  return {entities};
}

export default connect(mapStateToProps)(SE_HmqMarkets);
