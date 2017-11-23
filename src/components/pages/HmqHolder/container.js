import {connect} from 'react-redux';
import page from './page'
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

function mergeProps({holder, ...stateProps}, {fetchHmqHolderT, cleanHmqHolderT}, ownProps){

  let loadMore;

  if(holder.clean) cleanHmqHolderT();

  if(!holder.loaded && !holder.loading){
    loadMore = () => {}
  } else {
    loadMore = () => fetchHmqHolderT(holder.address, holder.offset)
  }
  return {holder, ...stateProps, loadMore, ...ownProps}
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(page);