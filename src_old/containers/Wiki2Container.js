import {connect} from 'react-redux';
import SE_Wiki2 from 'SE_Wiki2'
import {convert} from 'utils'

function mapStateToProps(state, ownProps) {
  const {loaded, loading} = state.wiki

  const {section, article:ArticleName} = ownProps

  let articles, sectionName
  switch(section){
    case 'technical-mecca':
      articles = state.wiki.technical
      sectionName = 'Technical Mecca'
      break;
    case 'about-humaniq':
      articles = state.wiki.about
      sectionName = 'About Humaniq'

  }

  const article = articles.filter(item => convert.toKebab(item.title) === ArticleName)[0]
  return {loaded, loading, article, section, sectionName};
}

export default connect(mapStateToProps)(SE_Wiki2);


