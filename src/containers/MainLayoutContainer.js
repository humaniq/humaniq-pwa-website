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
  const {navigation:{page}} = state
  // console.log(state)

  const _navMenu = navMenu.map(({name, url, addClass}) => {
    return {
      name,
      url,
      addClass,
      open: page === name.toLowerCase()
    }
  })

  return {page, navMenu:_navMenu};
}

export default connect(mapStateToProps)(SE_MainLayout);