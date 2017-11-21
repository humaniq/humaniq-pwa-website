import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as T from "prop-types";
import O_SubscribeForm from './Subscribe'
import O_AmbasadorsForm from './Ambasadors'
import {submit} from 'store/entities/simpleForms/actions'

class O_SimpleForm_H extends Component {

  getForm(formType, {submit, ...props}){
    switch(formType){
      case 'subscribe':
        return <O_SubscribeForm {...props} handleSubmit={data => submit('subscribe', data)}/>;
      case 'ambasadors':
        return <O_AmbasadorsForm {...props} handleSubmit={data => submit('ambassadors', data)}/>;
    }
  }

  render() {
    const {formType, } = this.props;
    // console.log('this.props from Simple Form',this.props);
    // console.log('formType from Simple Form',formType);

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


function mapStateToProps(){
  return {}
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ submit}, dispatch)
  return {...actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(O_SimpleForm_H);