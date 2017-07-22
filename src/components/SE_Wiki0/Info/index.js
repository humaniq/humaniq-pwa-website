import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_WikiInfo')
import A_Link from 'A_Link'
import A_Image from 'A_Image'
import A_H from 'A_H'

const SE_WikiInfo = ({children, type, img, title, link, external}) =>{
  const moving = type == 'moving-title'
  return (
      <div className={cn('root')}>
        <div className={cn('body')}>
          <span className={moving && "mobile-hide"}>
            <A_H type="section">{title}</A_H>
          </span>
          {children}
          <A_Link type="section-link" to={link.to} external>{link.text}</A_Link>
        </div>
        <div className={cn('img-side', {type})}>
          {moving &&
            <span className="mobile-show">
              <A_H type="section">{title}</A_H>
            </span>
          }
          <div className={cn('img')}>
            <A_Image {...img} />
          </div>
        </div>
      </div>
  )
}


SE_WikiInfo.propTypes = {
  type: T.oneOf([
    'moving-title', //title changes place on mobile devices
    'hidding-img', //img is hidding on mobile devices
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

SE_WikiInfo.defaultProps = {
}
export default SE_WikiInfo