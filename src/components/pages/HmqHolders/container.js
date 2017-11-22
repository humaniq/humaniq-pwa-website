import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import page from './page'
import {fetchHmqHolders} from 'store/entities/hmqHolders/actions'

function mapStateToProps( state ) {
  const {entities, loading} = state.hmqHolders
  return {entities, loading};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({fetchHmqHolders}, dispatch)
  return {...actions};
}

function mergeProps(stateProps, {fetchHmqHolders}, ownProps){

  const loadMore = () => {
    fetchHmqHolders(stateProps.entities.length)
  }

  return {...stateProps, loadMore, ...ownProps}
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(page);
