import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import O_TransactionLog from './Log'
import O_TransactionHolder from './Holder'
import O_TransactionMarket from './Market'

const cn = cssClassName('O_Transaction')

const O_Transaction = ({type, ...props}) =>{

  switch(type){
    case 'log':
      return <O_TransactionLog {...props} />
    case 'holder':
      return <O_TransactionHolder {...props} />
    case 'market':
      return <O_TransactionMarket {...props} />
  }
}

O_Transaction.propTypes = {
  type: T.oneOf([
    'log',
    'holder'
  ]).isRequired,
};

export default O_Transaction