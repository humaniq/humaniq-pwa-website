import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Hero')
import Item from './item.js'

const O_Hero = ({framed, inbuild}) => (
    <div className={cn('root')}>
      <div className={cn('container')}>
        <div className={cn('inner')}>
          <div className={cn('framed')}>
            <Item {...framed}/>
          </div>
          <div className={cn('inbuilt')}>
            <Item {...inbuild}/>
          </div>
        </div>
      </div>

    </div>
)

O_Hero.propTypes = {};
O_Hero.defaultProps = {}
export default O_Hero