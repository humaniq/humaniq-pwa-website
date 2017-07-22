import {connect} from 'react-redux';
import SE_Wiki2 from 'SE_Wiki2'

function mapStateToProps(state, ownProps) {
  const {loaded, descriptions} = state.wiki

  const {level0, id} = ownProps
  const {entities, level0Title} = state.wiki[level0]
  const article = entities[id]

  const descriptionObj = article && descriptions.find( description => (
    description.level0 === level0 && description.level1 === article.level1
  ))

  const description = descriptionObj && descriptionObj.description

  return {loaded, article, level0Title, level0, description};
}

export default connect(mapStateToProps)(SE_Wiki2);


