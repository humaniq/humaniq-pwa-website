import {connect} from 'react-redux';
import SE_Wiki1 from 'SE_Wiki1'
import {getArticleLinks} from 'utils'


function mapStateToProps(state, ownProps) {
  const {level0} = ownProps
  const { descriptions } = state.wikiArticles
  const {ids, entities, level0Title} = state.wikiArticles[level0]
  const urls = getArticleLinks(ids, entities)

  const descriptionObj = descriptions.find( description => (
    description.level0 === level0 && description.level1 === 'root'
  ))

  const {description, img} = descriptionObj

  const
    _level1Categories = ids
      .map(id => entities[id].level1)
      .filter((v, i, a) => a.indexOf(v) === i)

  const articlesByLevel1 = _level1Categories.map( level1Category => {
    const level1Urls = urls.filter( url => url.level1 === level1Category)

    return ({
      level1Category,
      articleUrls: level1Urls
    })
  })
  return {
    level0, articlesByLevel1, description, level0Title, img
  };
}

export default connect(mapStateToProps)(SE_Wiki1);


