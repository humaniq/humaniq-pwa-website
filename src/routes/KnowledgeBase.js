import React, {Component} from 'react'
import KnowledgeBaseContainer from 'components/pages/KnowledgeBase/container'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'


class KnowledgeBaseRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <KnowledgeBaseContainer />
    )
  }
}

export default KnowledgeBaseRoute