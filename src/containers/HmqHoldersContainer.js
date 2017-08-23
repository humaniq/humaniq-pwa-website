import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_HmqHolders from 'SE_HmqHolders'
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
    console.log('loading')
    fetchHmqHolders(stateProps.entities.length)
  }

  return {...stateProps, loadMore, ...ownProps}
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SE_HmqHolders);
