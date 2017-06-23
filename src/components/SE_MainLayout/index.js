import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import O_Footer from 'O_Footer'
import O_Header from 'O_Header'
import {cssClassName} from 'utils'
const cn = cssClassName('SE_MainLayout')

class SE_MainLayout extends Component {

  state ={
    desktopMenuOpen: false
  }

  desktopMenuToggle = () => {
    const {desktopMenuOpen} = this.state
    this.setState({desktopMenuOpen: !desktopMenuOpen})
  }

  render() {
    const {navMenu, children} = this.props
    const {desktopMenuOpen} = this.state
    return (
      <div className={cn()}>
        <O_Header
          {...{navMenu, desktopMenuOpen, onDesktopMenuOpen:this.desktopMenuToggle}}
        />
        {desktopMenuOpen ||
          children
        }
        <O_Footer />
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
