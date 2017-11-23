import React, {Component} from 'react';
import WikiLayoutContainer from 'components/pages/WikiLayout/container'
import {fetchWiki} from "entities/wikiArticles/actions";


class WikiLayoutRoute extends Component {

  static prepareData({dispatch}) {
    if(__SERVER__){
      dispatch(fetchWiki())
    }
  }


  render() {
    return (
      <WikiLayoutContainer >
        {this.props.children}
      </WikiLayoutContainer>
    )
  }
}

export default WikiLayoutRoute;