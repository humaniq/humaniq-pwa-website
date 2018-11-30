import React, {Component} from 'react';
import WikiLayoutContainer from 'components/pages/WikiLayout/container'
//import {fetchWiki} from "entities/wikiArticles/actions";
import initialLoad from 'utils/initialLoad'
import {setTheme} from 'store/entities/navigation/actions'

class WikiLayoutRoute extends Component {

  static prepareData({dispatch}) {
    //if(__SERVER__){
    //  dispatch(fetchWiki())
    //}
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
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