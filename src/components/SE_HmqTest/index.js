import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
import TestForm from 'SE_SimpleForm/Test';


class SE_HmqTest extends Component {
  render() {
    return (
      <div>
        <TestForm handleSubmit={form => console.log(form)}/>

      </div>
    )
  }
}


SE_HmqTest.propTypes = {};

export default SE_HmqTest
