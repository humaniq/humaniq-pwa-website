import React, {Component} from 'react'
import AnniversaryContainer from 'components/pages/Anniversary/container'
import initialLoad from "../utils/initialLoad";
import {setTheme} from 'store/entities/navigation/actions'

class AnniversaryRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }


  render() {
    return (
      <AnniversaryContainer />
    )
  }
}

export default AnniversaryRoute