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

    return (
      this.getForm(formType, this.props)
    )
  }

}

O_SimpleForm_H.propTypes = {
  formType: T.oneOf([
    'subscribe',
    'ambasadors',
  ]).isRequired,
};

export default O_SimpleForm_H