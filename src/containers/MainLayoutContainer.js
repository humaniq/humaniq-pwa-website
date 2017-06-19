import {connect} from 'react-redux';
import SE_MainLayout from 'SE_MainLayout'

function mapStateToProps(state) {
  const {mainTagline, mainEmail} = state.staticContent

  return {mainTagline, mainEmail};
}

export default connect(mapStateToProps)(SE_MainLayout);
