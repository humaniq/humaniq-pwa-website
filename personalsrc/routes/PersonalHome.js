import React, {Component} from 'react';
import PersonalHomeContainer from 'containers/PersonalHomeContainer'
import initialLoad from 'utils/initialLoad'

class HomeRoute extends Component {

  static prepareData() {
    if(initialLoad()) return;
  }

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