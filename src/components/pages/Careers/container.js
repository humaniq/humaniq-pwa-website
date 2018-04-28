import {connect} from 'react-redux';
import Page from './page'

function mapStateToProps(state) {
  const {entities, loaded, loading} = state.careers
  // console.log(JSON.stringify(entities))
  return {entities, loaded, loading}
}

export default connect(mapStateToProps)(Page);