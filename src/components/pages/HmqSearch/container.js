import {connect} from 'react-redux';
import page from './page'

function mapStateToProps(state) {
  const {loading, loaded, entities, request} = state.hmqSearch
  const show = !loading && loaded

  return {entities, request, show};
}

export default connect(mapStateToProps)(page)