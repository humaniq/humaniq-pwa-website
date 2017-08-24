import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_HmqHome from 'SE_HmqHome'
import {fetchGraphData} from 'store/entities/hmqGraph/actions'

function mapStateToProps( state ) {
  const {hmqGraph, hmqStatistic} = state

  return {hmqGraph, hmqStatistic};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({fetchGraphData}, dispatch)
  return {...actions};
}
export default connect(mapStateToProps, mapDispatchToProps)(SE_HmqHome);
