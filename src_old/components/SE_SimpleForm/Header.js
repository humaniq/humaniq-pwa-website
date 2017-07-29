import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleFormHeader')
import A_Logo from 'A_Logo'

const SE_SimpleFormHeader = ({children}) =>(
    <div className={cn('root')}>
      <div className={cn('logo')}>
        <A_Logo theme={'light'} size='small'/>
      </div>
      <div className={cn('nav')}>{children}</div>
    </div>
)

SE_SimpleFormHeader.propTypes = {
  children: T.any
};

export default SE_SimpleFormHeader