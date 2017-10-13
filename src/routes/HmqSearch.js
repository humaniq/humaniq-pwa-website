import React, {Component} from 'react';
import HmqSearchContainer from 'containers/HmqSearchContainer'
import {parse} from 'qs'
import {hmqSearch} from 'store/entities/hmqSearch/actions'
import initialLoad from 'utils/initialLoad'


class HmqSearch extends Component {

  static prepareData(store, query, params, location) {
    if(initialLoad()) return;
    const search = parse(location.search.substr(1))
    return store.dispatch(hmqSearch(search))
  }

  render() {
    return (
      <HmqSearchContainer />
    )
  }
}

export default HmqSearch;