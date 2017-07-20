import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleFormHeader')
import A_Logo from 'A_Logo'
import M_Ripple from 'M_Ripple'

const SE_SimpleFormHeader = ({children}) =>(
    <M_Ripple className={cn('root')}>
      <div className={cn('logo')}>
        <A_Logo theme={'light'} size='small'/>

      </div>
      <div className={cn('nav')}>{children}</div>
    </M_Ripple>
)

SE_SimpleFormHeader.propTypes = {
  children: T.any
};

export default SE_SimpleFormHeader