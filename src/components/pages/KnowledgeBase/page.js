import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('KnowledgeBase');

class KnowledgeBase extends Component {

  render() {
    return (
      <div className={cn('')}>
        Knowledge base
      </div>
    )
  }
}


export default KnowledgeBase;
