import React, {PropTypes} from 'react';

import catnip from 'catnip';
import styles from './styles.scss';
const cn = catnip('m-menu-list');

const M_MenuList = ({onClick, mod, mainEmail}) => {

  const longList = [
    {name: 'Our privacy policy', url: '/privacy/'},
  ]

  const shortList = [
    {name: 'Our privacy policy', url: '/privacy/'},
  ]

  const getMenu = (list) => {
    const _list = list.map( ({name, url}, i) => {
      return (
        <li key={i} className={cn('item', {mod})}>
          <a href="#" onClick={onClick(url)} className={cn('link')}>{name}</a>
        </li>
      )
    });

    _list.push(
      <li key={mainEmail} className={cn('item', {mod})}>
        <a href={"mailto:" + mainEmail} target="_blank">{mainEmail}</a>
      </li>
    )
    return _list
  }

  return (
    <ul>
      {getMenu(mod == 'short' ? shortList : longList)}
    </ul>
  )
}


M_MenuList.propTypes = {};

export default M_MenuList