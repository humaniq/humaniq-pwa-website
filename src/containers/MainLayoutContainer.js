import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_MainLayout from 'SE_MainLayout'
import {toggleMenu} from 'store/entities/navigation/actions'
import {_isContain} from 'utils'

const blueMainLayoutPages = ['wiki'] // pages with normal layout + dark theme
const noMainLayoutPages = ['form', 'internal-form'] // pages with their own layout

function mapStateToProps(state) {
  const {isMenuOpened, openRoute} = state.navigation
  const route0 = openRoute[0]
  const headerTheme = _isContain(blueMainLayoutPages, route0) ? 'blue' : 'white'
  const noLayout = _isContain(noMainLayoutPages, route0)
  return {isMenuOpened, headerTheme, noLayout};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({toggleMenu}, dispatch)
  return {...actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(SE_MainLayout);