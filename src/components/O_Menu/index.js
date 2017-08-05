import React from 'react';
import * as T from "prop-types";
// import { browserHistory } from 'react-router';
import './styles.scss';
import { cssClassName } from 'utils'
const cn = cssClassName('O_Menu');
import {Link} from 'react-router';
// import M_Dropdown from 'M_Dropdown';


const O_Menu = ({ options, selected, onClick, rootLink, stickyMenu }) => {
  const renderedLinks = options.map(({ anchor, text }) => {
    const isSelected = selected === anchor;
    return (
      <li key={'menu-item-' + anchor} className={cn('nav-links-item', { active: isSelected })}>
        {
          isSelected
            ? <div>{text}</div>
            : <Link to={rootLink + anchor} onClick={() => onClick(anchor)}>
                {text}
              </Link>
        }
      </li>
    )
  });


  // const selectedDropdownOption = options.find(option => option.anchor === selected) || options[0];
  // const dropdownValue = selectedDropdownOption.text;
  return (
    <nav>
      <ul className={cn('wider-screens', {stickyMenu})}>
        { renderedLinks }
      </ul>
      {/*<div className={cn('smaller-screens')}>*/}
        {/*<M_Dropdown*/}
          {/*options={options.map(option => option.text)}*/}
          {/*onChange={(text) => {*/}
            {/*browserHistory.push(rootLink + convert.toKebab(text));*/}
            {/*return text;*/}
          {/*}}*/}
          {/*selectedText='text'*/}
        {/*/>*/}
      {/*</div>*/}
    </nav>
  )
};


O_Menu.propTypes = {
  options: T.arrayOf(T.shape({
    anchor: T.string,
    text: T.string.isRequired,
  })),
  selected: T.string,
  handleNavigation: T.func,
};

O_Menu.defaultProps = {
  options: [],
  selected: '',
};

export default O_Menu