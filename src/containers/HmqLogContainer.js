import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux'
import SE_HmqLog from 'SE_HmqLog'
import {fetchHmqLog} from 'store/entities/hmqLog/actions'

function mapStateToProps( state ) {
  const {loading, entities} = state.hmqLog

  return {entities, loading};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({fetchHmqLog}, dispatch)
  return {...actions};
}

function mergeProps(stateProps, {fetchHmqLog}, ownProps){

  const lastItem = stateProps.entities[stateProps.entities.length - 1]
  let toTimestampIso
  if(lastItem){
    toTimestampIso = lastItem.timestampIso
  }

  const loadMore = () => fetchHmqLog(toTimestampIso)

  return {...stateProps, loadMore, ...ownProps}
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SE_HmqLog);
