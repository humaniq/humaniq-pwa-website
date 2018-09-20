import React, {Component} from 'react';
import FrequentlyAskedQuestionsContainer from 'components/pages/FrequentlyAskedQuestions/container'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class FrequentlyAskedQuestionsRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <FrequentlyAskedQuestionsContainer />
    )
  }
}

export default FrequentlyAskedQuestionsRoute;