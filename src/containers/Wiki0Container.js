import {connect} from 'react-redux';
import SE_Wiki0 from 'SE_Wiki0'
import {getArticleLinks} from 'utils'

function mapStateToProps(state) {
  const {'technical-mecca':technicalMecca, 'about-humaniq':aboutHumaniq} = state.wiki

  const articles = [
    ...getArticleLinks(technicalMecca.ids, technicalMecca.entities),
    ...getArticleLinks(aboutHumaniq.ids, aboutHumaniq.entities)
  ]

  console.log(aboutHumaniq, technicalMecca)
  return {articles};
}

export default connect(mapStateToProps)(SE_Wiki0);