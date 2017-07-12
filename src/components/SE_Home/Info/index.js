import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeInfo')
import A_Link from 'A_Link'
import A_Image from 'A_Image'
import A_H from 'A_H'
import A_Container from 'A_Container'

const SE_HomeInfo = ({children, type, img, title, link}) =>{
  const moving = type == 'moving-title'
  return (
    <A_Container type='section'>
      <div className={cn('root')}>
        <div className={cn('body')}>
          <span className={moving && "mobile-hide"}>
            <A_H type="section">{title}</A_H>
          </span>
          {children}
          <A_Link type="section-link" to={link.to}>{link.text}</A_Link>
        </div>
        <div className={cn('img', {type})}>
          {moving &&
            <span className="mobile-show">
              <A_H type="section">{title}</A_H>
            </span>
          }
          <A_Image {...img} />
        </div>
      </div>
    </A_Container>
  )
}


SE_HomeInfo.propTypes = {
  type: T.oneOf([
    'moving-title', //title changes place on mobile devices
    'hidding-img', //img is hidding on mobile devices
    'hidding-img-extra' //special image for global-access block

  ]).isRequired,
  children: T.node.isRequired,
  title: T.string,
  img: T.shape({
    src: T.string.isRequired,
    alt: T.string.isRequired
  }).isRequired,
  link: T.shape({
    to: T.string.isRequired,
    text: T.string.isRequired
  })
};

SE_HomeInfo.defaultProps = {
}
export default SE_HomeInfo