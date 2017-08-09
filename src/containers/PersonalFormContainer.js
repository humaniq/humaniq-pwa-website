import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {subscribeByReference} from 'store/entities/personal/actions'
import SE_PersonalForm from 'SE_PersonalForm'

function mapStateToProps(state) {
  const {loaded, name, phone_number, photo_url, invitationCode} = state.personal

  return {loaded, name, phone_number, photo_url, invitationCode};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({subscribeByReference}, dispatch)
  return {...actions};
}

function mergeProps(stateProps, dispatchProps){


  const {invitationCode} = stateProps
  const {subscribeByReference} = dispatchProps
  const handleSubmit = (phone_number) => {
    subscribeByReference(invitationCode, phone_number)
  }

  return {...stateProps, handleSubmit}
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SE_PersonalForm);