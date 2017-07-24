import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import O_TransactionLog from './Log'
const cn = cssClassName('O_Transaction')

const O_Transaction = ({type, ...props}) =>{

  switch(type){
    case 'log':
      return <O_TransactionLog {...props} />
  }
}

O_Transaction.propTypes = {
  type: T.oneOf([
    'log',
  ]).isRequired,
};

export default O_Transaction