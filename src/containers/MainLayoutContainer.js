import {connect} from 'react-redux';
import SE_MainLayout from 'SE_MainLayout'

const navMenu = [
  {
    name: 'Features',
    url: '/',
    disabled: false
  },
  {
    name: 'Use cases',
    url: '/cases',
    disabled: false
  },
  {
    name: 'Partners',
    url: '/partners',
    disabled: false
  },
  {
    name: 'Download',
    url: '/download',
    disabled: true
  }
]

function mapStateToProps(state) {
  const {navigation:{page}, staticContent:{mainTagline, mainEmail}} = state

  const _navMenu = navMenu.map(({name, url, disabled}) => {
    console.log(name.toLowerCase(), page)
    return {
      name,
      url,
      disabled,
      open: page === name.toLowerCase()
    }
  })

  return {mainTagline, mainEmail, page, navMenu:_navMenu};
}

export default connect(mapStateToProps)(SE_MainLayout);