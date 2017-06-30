import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_HeroItem')
import A_ButtonLink from 'A_ButtonLink'
import A_H from 'A_H'
import A_Image from 'A_Image'

const O_HeroItem = ({img, title, text, url}) =>(
  <div className={cn('root')}>
    <div className={cn('img')}>
      <A_Image src={img} rounded/>
    </div>
    <h6 className={cn('title')}>{title}</h6>
    <p className={cn('text')}>{text}</p>
    <div className={cn('button')}>
      <A_ButtonLink
        color="primary_solid"
        size="strage"
        to={url}
        block
      >Browse all articles</A_ButtonLink>
    </div>
  </div>
)

O_HeroItem.propTypes = {
};

O_HeroItem.defaultProps = {
}
export default O_HeroItem