import React from 'react';
import * as T from "prop-types";
import { browserHistory } from 'react-router';
import './styles.scss';
import { cssClassName, convert } from 'utils'
const cn = cssClassName('O_Menu');
import A_Link from 'A_Link';
import A_P from 'A_P';
import M_Dropdown from 'M_Dropdown';


const O_Menu = ({ options, selected, onClick, rootLink }) => {
  const renderedLinks = options.map(({ anchor, text }) => {
    const isSelected = selected === anchor;
    return (
      <li key={'menu-item-' + anchor} className={cn('nav-links-item', { active: isSelected })}>
        {
          isSelected
            ? <A_P type="hero">{text}</A_P>
            : <A_Link to={rootLink + anchor} type="primary" onClick={() => onClick(anchor)}>
                {text}
              </A_Link>
        }
      </li>
    )
  });


  const selectedDropdownOption = options.find(option => option.anchor === selected) || options[0];
  const dropdownValue = selectedDropdownOption.text;
  return (
    <nav>
      <ul className={cn('wider-screens')}>
        { renderedLinks }
      </ul>
      <div className={cn('smaller-screens')}>
        <M_Dropdown
          options={options.map(option => option.text)}
          onChange={(text) => {
            browserHistory.push(rootLink + convert.toKebab(text));
            return text;
          }}
          selected={dropdownValue}
        />
      </div>
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
  selected: false,
};

export default O_Menu