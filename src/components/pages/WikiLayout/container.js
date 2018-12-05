import {connect} from 'react-redux';
import page from './page'

function mapStateToProps(state) {
  //const {wikiSearch:{request: searchRequest}} = state
  //return {searchRequest};
  return {}
}

export default connect(mapStateToProps)(page);
