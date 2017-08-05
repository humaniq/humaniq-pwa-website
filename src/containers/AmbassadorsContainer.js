import {connect} from 'react-redux';
import SE_Ambassadors from 'SE_Ambassadors'

function mapStateToProps(state) {
  const {entities} = state.ambassadors
  const countries =
    entities
      .map(v => v.country)
      .filter((v, i, a) => a.indexOf(v) === i)

  return {entities, countries};
}

export default connect(mapStateToProps)(SE_Ambassadors);