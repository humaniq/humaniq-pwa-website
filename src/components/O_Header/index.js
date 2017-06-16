import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Header')
import A_Link from 'A_Link'
import A_Button from 'A_Button'
import A_logo from 'A_logo'

const O_Header = ({navMenu}) => {
  const menu = navMenu.map( ({name, url, use, open}) => (
      <li key={'key=' + name} >
        <span className={cn({open})}>
           <A_Link to={url}  disabled={!use} >{name}</A_Link>{' '}
        </span>
      </li>
    )
  )

  return (
    <header className={cn('root')}>
      <div className={cn('logo-block')}>
        <A_logo />
      </div>
      <nav className={cn('nav')}>
        <ul>
          {menu}
        </ul>
      </nav>
      <div className={cn('subscribe')}>
        <A_Button >Subscribe</A_Button>
      </div>
    </header>
  )
}

O_Header.propTypes = {
};

O_Header.defaultProps = {

};

export default O_Header