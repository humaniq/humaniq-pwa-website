import {connect} from 'react-redux';
import SE_Wiki0 from 'SE_Wiki0'
import {getArticleLinks} from 'utils'

function mapStateToProps(state) {
  const {'technical-mecca':technicalMecca, 'about-humaniq':aboutHumaniq} = state.wikiArticles

  const articles = [
    ...getArticleLinks(technicalMecca.ids, technicalMecca.entities),
    ...getArticleLinks(aboutHumaniq.ids, aboutHumaniq.entities)
  ]

  return {articles};
}

export default connect(mapStateToProps)(SE_Wiki0);