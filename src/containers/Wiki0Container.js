import {connect} from 'react-redux';
import SE_Wiki0 from 'SE_Wiki0'
import {getArticleLinks} from 'utils'

function mapStateToProps(state) {
  const {technical, about} = state.wiki
  let articleTitles = [
    ...getArticleLinks(technical, 'technical-mecca'),
    ...getArticleLinks(about, 'about-humaniq'),
  ];

  return {articleTitles};
}

export default connect(mapStateToProps)(SE_Wiki0);