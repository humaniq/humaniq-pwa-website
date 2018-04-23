import { connect } from 'react-redux'
import Page from './page'

function mapStateToProps(state, ownProps) {
  const { entities, loaded, loading } = state.pressReleases
  const { id } = ownProps

  const entity = entities.find(({_id}) => _id === id)
  return { entity, loaded, loading, entities }
}

export default connect(mapStateToProps)(Page)
