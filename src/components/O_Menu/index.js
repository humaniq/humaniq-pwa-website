import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Menu');
import A_Link from 'A_Link';
import A_P from 'A_P';


const O_Menu = ({ options, activeLink, handleNavigation, rootLink }) => {
  const renderedLinks = options.map(({ anchor, text }) => {
    const isActive = activeLink === anchor;
    return (
      <li key={'menu-item-' + anchor} className={cn('nav-links-item', { active: isActive })}>
        {
          isActive
            ? <A_P type="hero">{text}</A_P>
            : <A_Link to={rootLink + anchor} type="primary" name={anchor} onClick={handleNavigation}>{text}</A_Link>
        }
      </li>
    )
  });

  return (
    <nav>
      <ul className={cn()}>
        { renderedLinks }
      </ul>
    </nav>
  )
};


O_Menu.propTypes = {
  options: T.arrayOf(T.shape({
    anchor: T.string,
    text: T.string.isRequired,
  })),
  activeLink: T.string,
  handleNavigation: T.func,
};

O_Menu.defaultProps = {
  options: [],
  activeLink: false,
};

export default O_Menu