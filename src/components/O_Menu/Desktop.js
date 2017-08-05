import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import { cssClassName } from 'utils'
const cn = cssClassName('O_MenuDesktop');
import {Link} from 'react-router';


const O_MenuDesktop = ({ options, stickyMenu }) => {
  const renderedLinks = options.map(({ url, text, isSelected }, i) => {
    return (
      <li key={'menu-item-' + i} className={cn('nav-links-item', { active: isSelected })}>
        {
          isSelected
            ? <div>{text}</div>
            : <Link to={url}>
              {text}
            </Link>
        }
      </li>
    )
  });

  return (
    <nav>
      <ul className={cn('wider-screens', {stickyMenu})}>
        { renderedLinks }
      </ul>
    </nav>
  )
};


O_MenuDesktop.propTypes = {
  options: T.arrayOf(T.shape({
    url: T.string.isRequired,
    text: T.string.isRequired,
    isSelected: T.bool.isRequired
  })),
  stickyMenu: T.bool.isRequired,
};

O_MenuDesktop.defaultProps = {
  options: [],
};

export default O_MenuDesktop