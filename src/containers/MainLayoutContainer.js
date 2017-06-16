import {connect} from 'react-redux';
import SE_MainLayout from 'SE_MainLayout'

const navMenu = [
  {
    name: 'Home',
    url: '/',
    use: true
  },
  {
    name: 'Blog',
    url: '/posts',
    use: true
  },
  {
    name: 'Use cases',
    url: '/cases',
    use: false
  },
  {
    name: 'Partners',
    url: '/partners',
    use: false
  }
]

function mapStateToProps(state) {
  const {navigation:{page}, staticContent:{mainTagline, mainEmail}} = state

  const _navMenu = navMenu.map(({name, url, use}) => {
    return {
      name,
      url,
      use,
      open: page === name.toLowerCase()
    }
  })

  return {mainTagline, mainEmail, page, navMenu:_navMenu};
}

export default connect(mapStateToProps)(SE_MainLayout);
