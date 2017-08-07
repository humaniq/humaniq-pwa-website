import React, {Component} from 'react';
import WikiSearchContainer from 'containers/WikiSearchContainer'
import {parse} from 'qs'
import {wikiSearch} from 'store/entities/wikiSearch/actions'
import initialLoad from 'utils/initialLoad'


class WikiSearch extends Component {

  static prepareData(store, query, params, location) {
    if(initialLoad()) return;
    const search = parse(location.search.substr(1))
    return store.dispatch(wikiSearch(search))
  }

  render() {
    return (
      <div>
        <WikiSearchContainer />
      </div>
    )
  }
}

export default WikiSearch;