import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Page from './page'
import { toggleMenu, closePopup, openPopup, closePeopleModal } from 'store/entities/navigation/actions'

function mapStateToProps(state) {
  const {
    isMenuOpened,
    isPopupOpened,
    theme,
    popupType,
    openRoute,
    isPeopleModalOpened,
    personData,
  } = state.navigation

  return {
    isMenuOpened,
    isPopupOpened,
    theme,
    popupType,
    openRoute,
    isPeopleModalOpened,
    personData,
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ toggleMenu, closePopup, openPopup, closePeopleModal }, dispatch)
  return { ...actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
