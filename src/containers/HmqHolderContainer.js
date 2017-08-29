import {connect} from 'react-redux';
import SE_HmqHolder from 'SE_HmqHolder'
import {bindActionCreators} from 'redux'
import {fetchHmqHolderT} from 'store/entities/hmqHolder/actions'

function mapStateToProps( state ) {
  const {totalTransactions, loaded, loading, balance, address, transactions:{offset, ...transactions}} = state.hmqHolder

  return {totalTransactions, balance, loaded, loading, address, offset, transactions};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({fetchHmqHolderT}, dispatch)
  return {...actions};
}

function mergeProps({loaded, offset, ...stateProps}, {fetchHmqHolderT}, ownProps){

  let loadMore;
  if(!loaded && !stateProps.loading){
    loadMore = () => {}
  } else {
    loadMore = () => fetchHmqHolderT(stateProps.address, offset)
  }

  return {...stateProps, loadMore, ...ownProps}
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SE_HmqHolder);