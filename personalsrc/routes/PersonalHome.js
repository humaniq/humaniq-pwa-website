import React, {Component} from 'react';
import PersonalHomeContainer from 'containers/PersonalHomeContainer'

class HomeRoute extends Component {

  render() {
    const {invitationCode} = this.props.params

    return (
      <div>
        <PersonalHomeContainer invitationCode={invitationCode}/>
      </div>
    )
  }
}

export default HomeRoute;