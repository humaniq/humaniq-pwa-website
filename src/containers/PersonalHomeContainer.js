import SE_PersonalHome from 'SE_PersonalHome'
import {connect} from 'react-redux';

function mapStateToProps(state) {
  const {loaded, name, phone_number, photo_url, invitationCode} = state.personal
  return {loaded, name, phone_number, photo_url, invitationCode};
}


export default connect(mapStateToProps)(SE_PersonalHome);