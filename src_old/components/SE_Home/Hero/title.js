import React from 'react';
import * as T from "prop-types";
import './title.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeHeroTitle')

const SE_HomeHeroTitle = () =>(
  <div className={cn('root')} >
    <h1 className={cn('title')}>Banking the<br/> Unbanked</h1>
  </div>
)

export default SE_HomeHeroTitle