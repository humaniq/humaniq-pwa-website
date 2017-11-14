import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Page from './page'
import { toggleMenu, closePopup, openPopup } from 'store/entities/navigation/actions'

function mapStateToProps(state) {
  const { isMenuOpened, isPopupOpened, theme, popupType, openRoute } = state.navigation

  return { isMenuOpened, isPopupOpened, theme, popupType, openRoute }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ toggleMenu, closePopup, openPopup }, dispatch)
  return { ...actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
