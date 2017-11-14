import React, { Component } from 'react'
import * as T from 'prop-types'
import './styles.scss'
import { cssClassName } from 'utils'
import { Link } from 'react-router'

const cn = cssClassName('SE_MainLayoutSidebar')

// const getLink = ({popupLink, externalLink}, openPopup) => (
//   <li
//     className={cn('list-item')}
//   >
//     { popupLink ? (
//       <span className={cn('list-item-pop-up')} onClick={() => openPopup(formType)}>
//                     {name}
//                   </span>
//     ) : ( externalLink ?  <a href={url} target='_blank'>{name}</a> : <Link to={url}>{name}</Link>)
//     }
//   </li>
// )
// const _getMenuLinks= (links) => (
//   links.map(link => (
//     <li
//       className={cn('menu-link')}
//       key={`${link}-menu-link`}
//     >
//       {urls[link]}
//     </li>
//   ))
// )

// sidebarLinks: ['Open source', 'Contact us', 'Subscribe'],

class SE_MainLayoutSidebar extends Component {
  _getMenuLinks = links =>
    links.map(link => (
      <li className={cn('menu-link')} key={`${link}-menu-link`}>
        {link}
      </li>
    ))

  render() {
    const { mix, theme, openPopup } = this.props
    return (
      <nav className={cn([mix])}>
        <div className={cn('angle', { theme })} />
        <ul className={cn('menu')}>
          <li className={cn('menu-link')}>
            <Link to="/open-source">Open source</Link>
          </li>
          <li className={cn('menu-link')}>
            <Link to="/contact-us">Contact us</Link>
          </li>
          <li className={cn('menu-link')}>
            <span className={cn('list-item-pop-up')} onClick={() => openPopup('subscribe')}>
              Subscribe
            </span>
          </li>
        </ul>
      </nav>
    )
  }
}

export default SE_MainLayoutSidebar

SE_MainLayoutSidebar.propTypes = {
  mix: T.string, //BEM mixin from parent block
  menuLinks: T.array.isRequired, //links for sidebar menu
  theme: T.oneOf([
    'dark', // black angle
    'bright', // white angle
  ]),
}

SE_MainLayoutSidebar.defaultProps = {
  theme: 'bright',
}
