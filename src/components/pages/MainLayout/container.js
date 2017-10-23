import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Page from './page'
import {toggleMenu} from 'store/entities/navigation/actions'

function mapStateToProps(state) {
  const {isMenuOpened, theme} = state.navigation

  return {isMenuOpened, theme};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({toggleMenu}, dispatch)
  return {...actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);