import React from 'react';
import * as T from "prop-types";
import './BtnImg.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('BtnImg')
import A_Btn from './index'
import A_Image from 'A_Image'

const BtnImg = ({type, children, to, img}) =>(
  <div className={cn('root', {type})}>
    <A_Btn type="inline" to={to}>
      <div>
        <div className={cn('img')}>
          <A_Image src={img.src} alt={img.alt} link/>
        </div>
        <div className={cn('body')}>{children}</div>
      </div>
    </A_Btn>
  </div>
)

BtnImg.propTypes = {
  type: T.oneOf([
    'interactive' //link button with hover bottom border
  ]),
  img: T.shape({
    src: T.string.isRequired,
    alt: T.string.isRequired
  }).isRequired
};

BtnImg.defaultProps = {
  to: '#'
}

export default BtnImg