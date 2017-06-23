import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Header')
import A_Link from 'A_Link'
import A_ButtonLink from 'A_ButtonLink'
import A_logo from 'A_Logo'
import A_Button from 'A_Button'

const O_Header = ({navMenu, onDesktopMenuOpen, desktopMenuOpen}) => {
  const M_HeaderNav = navMenu.map( ({name, url, addClass, open}) => (
    <A_Link to={url} key={'key=' + name} open={open} addClassName={addClass}>{name}</A_Link>
  ))

  const connerBtn = (
    <A_Button onClick={onDesktopMenuOpen} type="img">
      <img src={desktopMenuOpen ? "/img/close.svg" : "/img/menuBtn.svg"} alt="menu"/>
    </A_Button>
  )


  return (
    <header className={cn({desktopMenuOpen})}>
      <div className="l-container-wide">
        <div className={cn('inner', {desktopMenuOpen})}>
          <A_logo />
          <nav className={cn('nav')}>
            {M_HeaderNav}
            <A_ButtonLink size="xs" color="transparent_black" to="/#" >Subscribe</A_ButtonLink>
            <span className={cn('connerBtn')}>
              {connerBtn}
            </span>
          </nav>
        </div>
      </div>

    </header>
  )
}

O_Header.propTypes = {
};

O_Header.defaultProps = {

};

export default O_Header