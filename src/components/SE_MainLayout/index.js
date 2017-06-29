import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import O_Footer from 'O_Footer'
import O_Header from 'O_Header'
import {cssClassName} from 'utils'
const cn = cssClassName('SE_MainLayout')

class SE_MainLayout extends Component {

  render() {
    const {navMenu, children, page, isMenuOpened: menuOpen, toggleMenu} = this.props
    return (
      <div className={cn({menuOpen})}>
        <div className={cn('main')}>
          <O_Header
            {...{navMenu, menuOpen, page, onClick: toggleMenu}}
          />
          {menuOpen || children }
        </div>

        <div className={cn('footer')}>
          <O_Footer menuOpen={menuOpen}/>
        </div>
      </div>
    )
  }
}


SE_MainLayout.propTypes = {
  children: T.any.isRequired,
  mainEmail: T.string,
  navMenu: T.array.isRequired
};

SE_MainLayout.defaultProps = {
  mainEmail: '',
  mainTagline: '',
}

export default SE_MainLayout
