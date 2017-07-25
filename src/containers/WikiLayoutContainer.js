import {connect} from 'react-redux';
import SE_WikiLayout from 'SE_WikiLayout'

function mapStateToProps(state) {
  const {wikiSearch:{request: searchRequest}} = state
  return {searchRequest};
}

export default connect(mapStateToProps)(SE_WikiLayout);
