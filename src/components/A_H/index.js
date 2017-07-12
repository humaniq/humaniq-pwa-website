import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H')

const A_H = ({type, icon, children, center}) =>{

  let tagType
  switch(type){
    case 'home-hero':
      tagType = 'h1'
      break;
    case 'bs':
    case 's':
      tagType = 'h5'
      break;
    case 'b-xs':
    case 'xs':
      tagType = 'h6'
      break;
    case 'section':
    default:
      tagType = 'h3'
  }

  center = center && 'center'

  return (
    React.createElement(
      tagType,
      {className: cn({type}, [center])},
      (icon ?
        <span className={cn('iconed', {icon}, [center])}>{children}</span>
        :
        children
      )
    )
  )
}

A_H.propTypes = {
  type: T.oneOf([
    'home-hero', //home page hero title
    'bs', // blue title uses at hero home page, 16/24
    'window', // black bold title 16/24 uses on subscribe/personal/join pages
    'xs', // black title uses at hero home page, 13/20 bold
    'section', //black title used for sections 23/32 padding-bottom 10
    'section-c', //black title used for sections 23/32 padding-bottom 30, always text-align center
  ]),
  icon: T.oneOf([
    'placeholder', // placeholder icon
  ]),
  children: T.any.isRequired
};

A_H.defaultProps = {
}
export default A_H