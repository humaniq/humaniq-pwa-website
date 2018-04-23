import {connect} from 'react-redux';
import Page from './page'

function mapStateToProps(state) {
  const {entities, loaded, loading} = state.pressReleases
  return {entities, loaded, loading}
}

export default connect(mapStateToProps)(Page);