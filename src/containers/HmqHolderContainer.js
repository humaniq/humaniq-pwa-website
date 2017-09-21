import {connect} from 'react-redux';
import SE_HmqHolder from 'SE_HmqHolder'
import {bindActionCreators} from 'redux'
import {fetchHmqHolderT} from 'store/entities/hmqHolder/actions'
import {cleanHmqHolderT} from 'store/entities/hmqHolder/actions'

function mapStateToProps( state ) {
  const {
    totalTransactions, loaded, loading, balance, address,
    transactions:{offset, clean, ...transactions}} = state.hmqHolder;

  return {
    holder: {totalTransactions, balance, loaded, loading, address, offset, clean},
    transactions
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({fetchHmqHolderT, cleanHmqHolderT}, dispatch)
  return {...actions};
}

function mergeProps({loaded, offset, clean, ...stateProps}, {fetchHmqHolderT, cleanHmqHolderT}, ownProps){

  let loadMore;

  if(clean) cleanHmqHolderT()

  if(!loaded && !stateProps.loading){
    loadMore = () => {}
  } else {
    loadMore = () => fetchHmqHolderT(stateProps.address, offset)
  }

  return {...stateProps, loadMore, ...ownProps}
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SE_HmqHolder);