import {connect} from 'react-redux';
import SE_Wiki1 from 'SE_Wiki1'
import {getArticleLinks} from 'utils'

function mapStateToProps(state, ownProps) {
  const {loaded, loading} = state.wiki

  const {section} = ownProps

  let articles
  switch(section){
    case 'technical-mecca':
      articles = state.wiki.technical
      break;
    case 'about-humaniq':
      articles = state.wiki.about
  }

  let articleTitles = getArticleLinks(articles, section)

  let categories =
    articles
      .map(v => v.category)
      .filter((v, i, a) => a.indexOf(v) === i)

  categories = categories.map( category => {
    const _articles = articles.filter( article => article.category == category)
    const urls = getArticleLinks(_articles, section)
    return ({
      name: category,
      articles: urls
    })
  })
  return {loaded, loading, articles, articleTitles, section, categories};
}

export default connect(mapStateToProps)(SE_Wiki1);


