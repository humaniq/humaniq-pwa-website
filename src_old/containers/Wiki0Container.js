import {connect} from 'react-redux';
import SE_Wiki0 from 'SE_Wiki0'
import {getArticleLinks} from 'utils'

function mapStateToProps(state) {
  const {loaded, loading, technical, about} = state.wiki
  let articleTitles = [
    ...getArticleLinks(technical, 'technical-mecca'),
    ...getArticleLinks(about, 'about-humaniq'),

  ];

  return {loaded, loading, technical, about, articleTitles};
}

export default connect(mapStateToProps)(SE_Wiki0);