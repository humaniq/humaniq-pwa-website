import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H')

const A_H = ({type, icon, children, center , mix}) =>{

  let tagType
  switch(type){
    case 'animated-hero':
    case 'video-hero':
      tagType = 'h1'
      break;
    case 'hero':
      tagType = 'h1'
      break;
    case 'section':
      tagType = 'h2'
      break;
    case 'android-white':
      tagType = 'h2'
      break;
    case 'android-black':
      tagType = 'h2'
      break;
    case 'timeline':
      tagType = 'h2'
      break;
    case 'search':
      tagType = 'h3'
      break;
    case 'section-sub':
      tagType = 'h4'
      break;
    case 'bs':
    case 'tooltip':
    case 'hmq-e':
    case 's':
      tagType = 'h5'
      break;
    case 'tooltip-sub':
    case 'b-xs':
    case 'xs':
      tagType = 'h6'
      break;
    case 'xxl':
      tagType = 'h6'
      break;
    case 'openitem':
      tagType = 'h6'
      break;
    default:
      tagType = 'h3'
  }

  center = center && 'center'

  return (
    React.createElement(
      tagType,
      {className: cn({type}, [center, mix])},
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
    'animated-hero',
    'video-hero',
    'hmq-e',
    'hmq', // black icon title for hmq explorer 16/25 /600, mob -margin left 16px
    'hero', //black bold 25
    'search', // white bold 25 used on wiki search
    'timeline', // black title uses at component O_Timeline, 16/24
    'bs', // blue title uses at hero home page, 16/24
    'wiki-result', // blue title 16/24/600/ marign-bottom 8
    'window', // black bold title 16/24 used on subscribe/personal/join/partners tooltip pages
    'tooltip', // black bold title 16/24 used on tooltip marign bottom 2px
    'tooltip-sub', //blue subtitle 15/26 used on tooltip marign bottom 8px
    'xs', // black title uses at hero home page, 13/20 bold
    'section', //black title used for sections 23/32 padding-bottom 10
    'section-sub', //black title used for sections 23/32 padding-bottom 10
    'section-c', //black title used for sections 23/32 padding-bottom 30, always text-align center
    'xxl', //black title used at error page 60
    'openitem', //light black used in open source page
    'hmq-title', //
    'android-white', // white bold 30 used on mobile-app
    'android-black', // white bold 30 used on mobile-app
  ]),
  icon: T.oneOf([
    'placeholder', // placeholder icon
  ]),
  children: T.any.isRequired
};

A_H.defaultProps = {
}
export default A_H