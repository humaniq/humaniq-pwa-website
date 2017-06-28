import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import O_Footer from 'O_Footer'
import O_Header from 'O_Header'
import {cssClassName} from 'utils'
const cn = cssClassName('SE_MainLayout')

class SE_MainLayout extends Component {

  state ={
    menuOpen: false
  }

  toggleMenu = () => {
    const {menuOpen} = this.state
    this.setState({menuOpen: !menuOpen})
  }

  render() {
    const {navMenu, children, page} = this.props
    const {menuOpen} = this.state
    return (
      <div className={cn({menuOpen})}>
        <div className={cn('main')}>
          <O_Header
            {...{navMenu, menuOpen, page, onClick:this.toggleMenu}}
          />
          {menuOpen ||
          children
          }
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
