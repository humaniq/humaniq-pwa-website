import {connect} from 'react-redux';
import page from './page'
import {getArticleLinks} from 'utils'

function mapStateToProps(state) {
  const {'technical-mecca':technicalMecca, 'about-humaniq':aboutHumaniq} = state.wikiArticles

  const articles = [
    ...getArticleLinks(technicalMecca.ids, technicalMecca.entities),
    ...getArticleLinks(aboutHumaniq.ids, aboutHumaniq.entities)
  ]

  return {articles};
}

export default connect(mapStateToProps)(page);