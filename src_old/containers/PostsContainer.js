import {connect} from 'react-redux';
import SE_Posts from 'SE_Posts'
import {postPath} from 'utils/routesHelpers'
import {_date} from 'utils/dateHelpers'

function mapStateToProps(state) {
  const
    {posts: {ids, entities, loaded, loading}, staticContent: {indexPageTitle}} = state,
    show = loaded || !loading,
    posts = ids.map((id) => {
      return {
        ...entities[id],
        published: _date(entities[id].published),
        url: postPath(id),
      }
    })
  return {posts, show, indexPageTitle};
}


export default connect(mapStateToProps)(SE_Posts);

