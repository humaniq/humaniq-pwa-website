import {connect} from 'react-redux';
import SE_Partners from 'SE_Partners'

function mapStateToProps(state) {
  const {entities} = state.partners
  const types =
    entities
      .map(v => v.type)
      .filter((v, i, a) => a.indexOf(v) === i)

  return {entities, types};
}

export default connect(mapStateToProps)(SE_Partners);