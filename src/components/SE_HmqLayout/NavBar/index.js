import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqLayoutNavBar')
import A_Container from 'A_Container';
import A_Link from 'A_Link'

class SE_HmqLayoutNavBar extends Component {

  getLinks(menu){
    const links = menu.map(({title, url, active}, i) => (
      <li className={cn('nav-li')} key={"key_" + i}>
        <A_Link
          className={cn('nav-a', { active})}
          to={url}
        >{title}
        </A_Link>
      </li>
    ))
    return(
      <ul className={cn('nav-list')}>
        {links}
      </ul>
    )
  }
  render() {
    const { menu } = this.props;

    const renderedLinks = this.getLinks(menu)
    return (
      <div className={cn('navigation')}>
        <A_Container>
          <div className={cn('flex-nav')}>
            <nav className={cn('nav')}>
              <ul className={cn('nav-list')}>
                {renderedLinks}
              </ul>
            </nav>
            <form action="" className={cn('search-form')}>
              <input type="text"
                     className={cn('search-input')}
                     placeholder="Search TxHash or Address"
              />
              <button className={cn('search-icon')}></button>
            </form>
          </div>
        </A_Container>
      </div>
    )
  }
}

SE_HmqLayoutNavBar.propTypes = {
  menu: T.array.isRequired
};

SE_HmqLayoutNavBar.defaultProps = {
}

export default SE_HmqLayoutNavBar