import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Page from './page'
import {toggleMenu, closePopup} from 'store/entities/navigation/actions'

function mapStateToProps(state) {
  const {isMenuOpened, isPopupOpened, theme, popupType} = state.navigation

  return {isMenuOpened, isPopupOpened, theme, popupType}
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({toggleMenu, closePopup}, dispatch)
  return {...actions}
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)