import React from 'react';
import * as T from "prop-types";
import styles from './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_DotIndicator')

const M_DotIndicator = ({active, count, onClick}) => {

  const dots = []
  for (let i = 0; i < count; i++) {
    const isActive = i === active
    dots.push(
      <li className={cn('dot', [isActive && 'current'])} key={'key_' + i} onClick={() => onClick(i)} />
    )
  }
  return (
    <div className={cn('wrapper')}>
      <ol className={cn('indicator')}>
        {dots}
      </ol>
    </div>
  )
}
M_DotIndicator.propTypes = {};

M_DotIndicator.defaultProps = {}
export default M_DotIndicator