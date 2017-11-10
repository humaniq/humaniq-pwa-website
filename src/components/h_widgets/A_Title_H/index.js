import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Title')

const A_Title = ({type, theme, mix, children}) =>{

  let tagType
  switch(type){
    case 'hero':
      tagType = 'h1'
      break;
    case 'section':
      tagType = 'h2'
      break;
    case 'info-column':
      tagType = 'h3'
      break;
    default:
      tagType = 'p'
  }

  return (
    React.createElement(
      tagType,
      {className: cn({type, theme}, [mix])},
      children
    )
  )
}


A_Title.propTypes = {
  type: T.oneOf([
    'hero', //ProximaNova Uppercase bold 72px
    'section', //ProximaNova bold 72px
    'info-column' //ProximaNova bold 31px
  ]),
  theme: T.oneOf([
    'bright', //white ProximaNova bold 72px
    'dark', //black title used for sections
  ]),
  children: T.any.isRequired //title text
}

A_Title.defaultProps = {
  theme: 'dark'
}

export default A_Title