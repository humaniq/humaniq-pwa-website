import {connect} from 'react-redux';
import SE_HmqMarkets from 'SE_HmqMarkets'

function mapStateToProps( state ) {
  const {loading, entities} = state.hmqMarkets;

  return {loading, entities};
}

export default connect(mapStateToProps)(SE_HmqMarkets);
