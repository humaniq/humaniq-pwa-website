import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_PartnersTooltip')

const SE_PartnersTooltip = ({children}) =>{
  return(
    <div className={cn('wrapper')}>
      <div className={cn('root')}>
        {children}

      </div>
      <div className={cn('arrow')}/>
    </div>
  )
}

SE_PartnersTooltip.propTypes = {
};

SE_PartnersTooltip.defaultProps = {
}
export default SE_PartnersTooltip