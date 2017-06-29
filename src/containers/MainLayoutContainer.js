import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import SE_MainLayout from 'SE_MainLayout'
import {toggleMenu} from 'AC/navigation'
const navMenu = [
  {
    name: 'Contact Us',
    url: '/contacts'
  },
  {
    name: 'Download',
    url: '/download',
    addClass: 'mobile-show'
  }
]

function mapStateToProps(state) {
  const {page, isMenuOpened} = state.navigation

  const _navMenu = navMenu.map(({name, url, addClass}) => {
    return {
      name,
      url,
      addClass,
      open: page === name.toLowerCase()
    }
  })

  return {page, navMenu:_navMenu, isMenuOpened};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({toggleMenu}, dispatch)
  return {...actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(SE_MainLayout);