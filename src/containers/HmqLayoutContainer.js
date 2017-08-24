import {connect} from 'react-redux';
import HmqLayout from 'components/SE_HmqLayout'
import {bindActionCreators} from 'redux'
import {setHmqSection} from 'store/entities/navigation/actions'

function mapStateToProps( state ) {
  const {navigation:{openRoute, hmqSection}} = state

  return {openRoute, hmqSection};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({setHmqSection}, dispatch)
  return {...actions};
}
function mergeProps({openRoute, hmqSection}, {setHmqSection}, ownProps){

  if(openRoute[1] !== hmqSection){
    setHmqSection(openRoute[1])
  }

  const hideSearch = openRoute[1] == 'search'

  const menu = initMenu.map( ({title, urlSection}) => ({
    title,
    url: `/hmq-explorer/${urlSection || ''}`,
    active: urlSection === hmqSection
  }))

  return {hmqSection, menu, ...ownProps, hideSearch}
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HmqLayout);

const initMenu = [
  {
    title: 'Home',
  },
  {
    title: 'Transactions',
    urlSection: 'transaction-log'
  },
  {
    title: 'Token Holders',
    urlSection: 'token-holders'
  },
  {
    title: 'Markets',
    urlSection: 'markets'
  }
]