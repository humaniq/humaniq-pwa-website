import {connect} from 'react-redux';
import SE_Post from 'SE_Post'
import {_date} from 'utils/dateHelpers'


function mapStateToProps(state) {
  const
    {entry, loading, loaded} = state.post,
    show = loaded || !loading,
    published = _date(entry.published),
    _entry = {...entry, published}

  return {..._entry, show};
}

export default connect(mapStateToProps)(SE_Post);
