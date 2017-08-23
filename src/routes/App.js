import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'containers/MainLayoutContainer'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'store/entities/navigation/actions'
import {fetchWiki} from 'store/entities/wikiArticles/actions';
import {fetchAmbassadors} from 'store/entities/ambassadors/actions'
import {fetchPartners} from 'store/entities/partners/actions'
import {fetchHmqStatistics} from 'store/entities/hmqStatistic/actions'


class AppRoute extends Component {

  static prepareData({dispatch, getState}, query, params, location) {
    if(__CLIENT__) {
      const state = getState()
      state.wikiArticles.loaded || dispatch(fetchWiki())
      state.transactions.loaded || dispatch(fetchHmqStatistics())
      state.partners.loaded || dispatch(fetchPartners())
      state.partners.loaded || dispatch(fetchAmbassadors())

    }

    if(initialLoad()) return;
    dispatch(setRoute(location.pathname))
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

