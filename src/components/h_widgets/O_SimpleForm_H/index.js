import React, {Component} from 'react';
import * as T from "prop-types";
import O_SubscribeForm from './Subscribe'
import O_AmbasadorsForm from './Ambasadors'

class O_SimpleForm_H extends Component {

  getForm(formType, props){
    switch(formType){
      case 'subscribe':
        return <O_SubscribeForm {...props} />;
      case 'ambasadors':
        return <O_AmbasadorsForm {...props} />;
    }
  }

  render() {
    const {formType} = this.props;
    console.log('this.props from Simple Form',this.props);
    console.log('formType from Simple Form',formType);

    return (
      formType ? (
        this.getForm(formType, this.props)
      ):(null)
    )
  }

}

O_SimpleForm_H.propTypes = {
  formType: T.oneOf([
    'subscribe',
    'ambasadors',
  ])
};

export default O_SimpleForm_H