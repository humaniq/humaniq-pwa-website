import {connect} from 'react-redux';
import SE_HmqSearch from 'SE_HmqSearch'

function mapStateToProps(state) {
  const {loading, loaded, entities, request} = state.hmqSearch
  const show = !loading && loaded

  return {entities, request, show};
}

export default connect(mapStateToProps)(SE_HmqSearch);