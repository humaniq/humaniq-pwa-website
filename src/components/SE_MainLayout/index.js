import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import O_Footer from 'O_Footer'
import O_Header from 'O_Header'
class SE_MainLayout extends Component {

  render() {
    const {navMenu, children, darkTheme, isMenuOpened: menuOpen, toggleMenu} = this.props
    return (
      <div>
        <O_Header
          {...{navMenu, menuOpen, darkTheme, onClick: toggleMenu}}
        />
          { children }
        <O_Footer menuOpen={menuOpen}/>
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
