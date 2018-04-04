import React, {Component} from 'react';
import CareersContainer from 'components/pages/Careers/container'
import initialLoad from "utils/initialLoad";
import {fetchCareers} from "store/entities/careers/actions";
import {setTheme} from "../../store/entities/navigation/actions";

class CareersRoute extends Component {


  static prepareData({dispatch}) {
    dispatch(setTheme('dark'))

    if(initialLoad()) return;
    return(
      dispatch(fetchCareers())
    )
  }

  render() {
    return (
      <CareersContainer />
    )
  }
}

export default CareersRoute;