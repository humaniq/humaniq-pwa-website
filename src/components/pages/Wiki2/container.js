import {connect} from 'react-redux';
import page from './page'

function mapStateToProps(state, ownProps) {
  const {loaded, descriptions} = state.wikiArticles

  const {level0, id} = ownProps
  const {entities, level0Title} = state.wikiArticles[level0]
  const article = entities[id]

  const descriptionObj = article && descriptions.find( description => (
    description.level0 === level0 && description.level1 === article.level1
  ))

  const description = descriptionObj && descriptionObj.description

  return {loaded, article, level0Title, level0, description};
}

export default connect(mapStateToProps)(page);


