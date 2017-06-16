import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_News')
import M_ReadMore from 'M_ReadMore'

const O_News = () =>(
  <div className={cn()} >
    <div className={cn('author')} >
        Content Manager
      <p>
        Thursday, June 15, 2017
      </p>
    </div>
    <div className={cn('body')}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus et sapien in rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus et sapien in rutrum.
        <M_ReadMore />
      </p>
    </div>
  </div>
)

O_News.propTypes = {
};

export default O_News