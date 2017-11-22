import {connect} from 'react-redux';
import page from './page'
import {bindActionCreators} from 'redux'
import {fetchHmqLog} from 'store/entities/hmqLog/actions'

function mapStateToProps( state ) {
  const {loading, entities, next} = state.hmqLog

  return {entities, loading, next};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({fetchHmqLog}, dispatch)
  return {...actions};
}

function mergeProps({next, ...stateProps}, {fetchHmqLog}, ownProps){

  const loadMore = () => fetchHmqLog(next)

  return {...stateProps, loadMore, ...ownProps}
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(page);
