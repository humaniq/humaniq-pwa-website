import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Hero')
import A_Image from 'A_Image'

const O_Hero = ({img, children}) => (
  <div className={cn('root')}>
    <div className={cn('image')}>
      <A_Image {...img} />
    </div>

    <div className={cn('text')}>
      {children}
    </div>
  </div>
)

O_Hero.propTypes = {
  img: T.shape({
    src: T.string.isRequired,
    alt: T.string.isRequired
  }).isRequired
};

O_Hero.defaultProps = {}
export default O_Hero