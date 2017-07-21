import React from 'react';
import * as T from "prop-types";
import './title.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeHeroTitle')

const SE_HomeHeroTitle = () =>(
  <div className={cn('root')} >
    <h1 className={cn('title-1')}><span className={cn('shadow-text')}>Banking the</span><br/><span >Unbanked</span></h1>
    <h6 className={cn('title-2')}><span className={cn('shadow-block')}>Banking the</span><br/> Unbanked</h6>

  </div>
)

export default SE_HomeHeroTitle