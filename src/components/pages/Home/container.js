import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Page from './page'
import { setTheme, openPopup } from 'store/entities/navigation/actions'
import { submit } from 'store/entities/simpleForms/actions'

function mapStateToProps(state) {
  const { navigation:{theme}, home:{users_number} } = state
  return { theme, users_number }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ setTheme, openPopup, submit }, dispatch)
  return { ...actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
