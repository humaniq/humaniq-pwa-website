import React, {Component} from 'react';
import CasesContainer from 'containers/CasesContainer'
import initialLoad from 'utils/initialLoad'
import {setPage} from 'AC/navigation'

class CasesRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setPage('cases'))
  }

  render() {
    return (
      <div>
        <CasesContainer />
      </div>
    )
  }
}

export default CasesRoute;