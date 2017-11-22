import {connect} from 'react-redux';
import page from './page'
import {convert} from "utils"

function mapStateToProps(state) {
  const {wikiSearch:{articles, total, request, loading, loaded}} = state
  const show = !loading && loaded
  const _articles = articles.map(article => {
    const url = `/wiki/${convert.toKebab(article.type)}/${convert.toCleanKebab(article.title)}`
    return{
      ...article,
      url
    }
  })
  return {articles: _articles, total, request, show};
}

export default connect(mapStateToProps)(page);