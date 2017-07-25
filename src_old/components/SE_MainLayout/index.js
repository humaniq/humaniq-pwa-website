import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import Footer from './Footer'
import Header from './Header'
import {cssClassName} from 'utils'
const cn = cssClassName('SE_MainLayout')

class SE_MainLayout extends Component {

  render() {
    const {isMenuOpened, children, toggleMenu, headerTheme, noLayout} = this.props
    if(noLayout){return children}

    return (
      <div>
        <Header
          {...{isMenuOpened, onClick: toggleMenu, headerTheme}}
        />
          <div className={cn('body', {isMenuOpened})}>{ children }</div>
        <Footer isMenuOpened={isMenuOpened}/>
      </div>
    )
  }
}


SE_MainLayout.propTypes = {
  headerTheme: Header.propTypes.headerTheme,
  children: T.any.isRequired,
  isMenuOpened: T.bool,
  toggleMenu: T.func.isRequired
};

SE_MainLayout.defaultProps = {
  isMenuOpened: false,
  mainTagline: '',
}

export default SE_MainLayout
