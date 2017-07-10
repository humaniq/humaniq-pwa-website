import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeInfoAnimation')
import A_Link from 'A_Link'
import A_H from 'A_H'
import A_Container from 'A_Container'
import FlyingLogos from './FlyingLogos'
const SE_HomeInfoAnimation = ({children, title, link}) =>{
  return (
    <A_Container type='section'>
      <div className={cn('root')}>
        <div className={cn('body')}>
        <A_H type="section">{title}</A_H>
          {children}
          <A_Link type="section-link" to={link.to}>{link.text}</A_Link>
        </div>
        <div className={cn('img')}>
          <FlyingLogos />
        </div>
      </div>
    </A_Container>
  )
}


SE_HomeInfoAnimation.propTypes = {
  children: T.node.isRequired,
  title: T.string,
  link: T.shape({
    to: T.string.isRequired,
    text: T.string.isRequired
  })
};

SE_HomeInfoAnimation.defaultProps = {
}
export default SE_HomeInfoAnimation