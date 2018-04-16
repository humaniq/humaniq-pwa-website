import {connect} from 'react-redux';
import Page from './page'
import {bindActionCreators} from 'redux'
import {openPopup} from 'store/entities/navigation/actions'
import { ambassadors } from 'data/people'

function mapStateToProps() {
  const countries =
    ambassadors
      .map(v => v.position)
      .filter((v, i, a) => a.indexOf(v) === i)

  return {entities: ambassadors, countries};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({openPopup}, dispatch)
  return {...actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);