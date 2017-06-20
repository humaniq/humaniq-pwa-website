import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Header')
import A_Link from 'A_Link'
import A_ButtonLink from 'A_ButtonLink'
import A_logo from 'A_Logo'

const O_Header = ({navMenu}) => {
  //TODO: вынести M_HeaderNav
  const M_HeaderNav = navMenu.map( ({name, url, disabled, open}) => (
    <A_Link to={url} key={'key=' + name} disabled={disabled} open={open}>{name}</A_Link>
  ))

  return (
    <header className={cn()}>
      <div className="l-container-wide">
        <div className={cn('inner')}>
          <A_logo />

          {/*TODO: вынести M_HeaderNav*/}
          <nav className="m-header-nav">
            {M_HeaderNav}
            <A_ButtonLink size="xs" color="transparent_black" to="/#" >Subscribe</A_ButtonLink>
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