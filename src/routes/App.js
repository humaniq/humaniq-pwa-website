import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'MainLayout/container.js'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'store/entities/navigation/actions'
//import {fetchWiki} from 'store/entities/wikiArticles/actions';
//import {fetchAmbassadors} from 'store/entities/ambassadors/actions'
//import {fetchPartners} from 'store/entities/partners/actions'
import {fetchUserNumber} from 'store/entities/home/actions'



class AppRoute extends Component {

  static prepareData({dispatch, getState}, query, params, location) {
    if(__CLIENT__) {
      const state = getState()
      //state.wikiArticles.loaded || dispatch(fetchWiki())
      //state.partners.loaded || dispatch(fetchPartners())
      //state.ambassadors.loaded || dispatch(fetchAmbassadors())
    }

    if(initialLoad()) return;
    return(
      Promise.all([
        dispatch(setRoute(location.pathname)),
        //dispatch(fetchUserNumber())
      ])
    )
  }

  render() {
    return (
      <MainLayoutContainer>
        {this.props.children}
      </MainLayoutContainer>
    )
  }
}

AppRoute.propTypes = {
  children: T.any.isRequired
};

export default AppRoute;

