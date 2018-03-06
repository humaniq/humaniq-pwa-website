import React, {Component} from 'react';
import PressArticleContainer from 'PressArticle/container.js'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class PressArticleRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <PressArticleContainer />
    )
  }
}

export default PressArticleRoute