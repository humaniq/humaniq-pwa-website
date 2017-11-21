import React, {Component} from 'react';
import LegalContainer from 'components/pages/Legal/container'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class LegalRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }


  render() {
    const page = this.props.route.path
    return (
      <LegalContainer page={page}/>
    )
  }
}

export default LegalRoute;