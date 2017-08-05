import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleForm')
import SubscribeForm from './SubscribeForm'
import JoinForm from './JoinForm'
import AmbassadorsForm from './AmbassadorsForm'

class SE_SimpleForm extends Component {

  getForm(page, handleSubmit){
    switch(page){
      case 'join':
        return <JoinForm {...{handleSubmit}} />
      case 'subscribe':
        return <SubscribeForm {...{handleSubmit}} />
      case 'ambassadors':
        return <AmbassadorsForm {...{handleSubmit}} />
    }
  }

  render() {
    const {page, handleSubmit} = this.props

    return (
      <div className={cn('background')}>
        <div className={cn('background-blue')} >
          <div className={cn('root')} >
            {this.getForm(page, handleSubmit)}
          </div>
        </div>
      </div>
    )
  }
}

SE_SimpleForm.propTypes = {
  page: T.oneOf([
    'join', // join partners form
    'subscribe', // subscribe letters form
    'ambassadors' // join ambassadors form
  ]).isRequired,
  handleSubmit: T.func.isRequired,
};

SE_SimpleForm.defaultProps = {
}

export default SE_SimpleForm;