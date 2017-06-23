import {connect} from 'react-redux';
import SE_MainLayout from 'SE_MainLayout'

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
  const {navigation:{page}, staticContent:{mainTagline, mainEmail}} = state

  const _navMenu = navMenu.map(({name, url, addClass}) => {
    // console.log(name.toLowerCase(), page)
    return {
      name,
      url,
      addClass,
      open: page === name.toLowerCase()
    }
  })

  return {mainTagline, mainEmail, page, navMenu:_navMenu};
}

export default connect(mapStateToProps)(SE_MainLayout);