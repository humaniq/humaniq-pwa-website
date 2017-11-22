import {connect} from 'react-redux';
import page from './page'

function mapStateToProps( state ) {
  const {loading, entities} = state.hmqMarkets;

  return {loading, entities};
}

export default connect(mapStateToProps)(page);
