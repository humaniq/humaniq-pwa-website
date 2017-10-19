import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Page from './page'
import {toggleMenu} from 'store/entities/navigation/actions'
import {_isContain} from 'utils'

const noMainLayoutPages = ['form'] // pages with their own layout
const blueMainLayoutPages = ['wiki'] // pages with normal layout + dark theme

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

export default connect(mapStateToProps, mapDispatchToProps)(Page);