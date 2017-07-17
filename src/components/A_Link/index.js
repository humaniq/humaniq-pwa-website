import React from 'react';
import * as T from "prop-types";
import {Link} from 'react-router'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Link')

const A_Link = ({children, type, block, disabled, external, to, ...props}) => {

  let _link, content
  const className= cn({block, type}, [disabled && 'disabled'])
  if(type == 'section-link'){
    content = (
      <span>{children}<span style={{whiteSpace: 'nowrap'}}> here »</span></span>
    )
  } else{
    content = children
  }
  if (external) {
    _link =(
      <a className={className} href={to} target="_blank">{content}</a>
    )
  } else {
    _link =(
      <Link className={className} {...props} to={to}>
        {content}
      </Link>
    )
  }
  return _link
}
A_Link.propTypes = {
  type: T.oneOf([
    'primary', // brand blue link
    'hero-list-links', // brand blue link 15/26
    'white', // white links
    'section-link', //blue links in info blocks automatically add ` here »`
    'section-link-clean', //blue links in info blocks automatically without 'here »'
    'block' // display block link

  ]),
  external: T.bool, // for external links
  disabled: T.bool,
  children: T.node.isRequired
};

A_Link.defaultProps ={
  // type: 'primary'
}

export default A_Link