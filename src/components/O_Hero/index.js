import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Hero')
import Item from './item.js'
import A_Container from 'A_Container'

const O_Hero = ({framed, inbuild}) => (
    <div className={cn('root')}>
      <A_Container>
        <div className={cn('inner')}>
          <div className={cn('framed')}>
            <Item {...framed}/>
          </div>
          <div className={cn('inbuilt')}>
            <Item {...inbuild}/>
          </div>
        </div>
      </A_Container>

    </div>
)

O_Hero.propTypes = {};
O_Hero.defaultProps = {}
export default O_Hero