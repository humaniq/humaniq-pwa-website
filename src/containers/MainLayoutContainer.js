import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_MainLayout from 'SE_MainLayout'
import {toggleMenu} from 'AC/navigation'

function mapStateToProps(state) {
  const {isMenuOpened} = state.navigation
  const headerTheme = 'white'
  return {isMenuOpened, headerTheme};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({toggleMenu}, dispatch)
  return {...actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(SE_MainLayout);