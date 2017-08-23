import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_HmqHolders from 'SE_HmqHolders'
import {fetchHmqHolders} from 'store/entities/hmqHolders/actions'

function mapStateToProps( state ) {
  const {entities} = state.hmqHolders

  return {entities};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({fetchHmqHolders}, dispatch)
  return {...actions};
}

function mergeProps(stateProps, {fetchHmqHolders}){

  const loadMore = () => {
    fetchHmqHolders(stateProps.entities.length)
  }

  return {...stateProps, loadMore}
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SE_HmqHolders);
