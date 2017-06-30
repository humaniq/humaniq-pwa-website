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
  const darkTheme = checkDarkTheme(page)
  const _navMenu = navMenu.map(({name, url, addClass}) => {
    return {
      name,
      url,
      addClass,
      open: page === name.toLowerCase()
    }
  })

  return {darkTheme, navMenu:_navMenu, isMenuOpened};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({toggleMenu}, dispatch)
  return {...actions};
}



function checkDarkTheme(page) {
  if (__DEVELOPMENT__ && !page) { console.log('You need to prepareData for this route (routes/index) to set themes for header'); }
  const darkThemeUrls = ['cases', 'partners', 'wiki']
  return darkThemeUrls.indexOf(page) > -1
}

export default connect(mapStateToProps, mapDispatchToProps)(SE_MainLayout);