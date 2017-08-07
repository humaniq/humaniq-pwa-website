import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_ScrollUp')
import A_Image from 'A_Image'

class O_ScrollUp extends Component {

  state = {
    hide: true
  }

  componentDidMount() {
    __CLIENT__ && window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    __CLIENT__ && window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const {showAfter} = this.props
    if (this.state.hide && (window.pageYOffset > showAfter)) {
      this.setState({hide: false})
    } else if (!this.state.hide && (window.pageYOffset < showAfter)) {
      this.setState({hide: true})
    }
  }

  render() {
    const {initTop, children} = this.props
    const {hide} = this.state

    return(
      <div className={cn('wrapper')}>
        <div className={cn('root', {hide})} onClick={() => window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })}
        ><div className={cn('h-height')}>.</div>
          <div style={{top: initTop}} className={cn('button')}>
            <span className={cn('button-icon')}><A_Image src="/img/icons/download-3@2x.png" alt='go up'/></span>
            <span className={cn('button-text')}>Go up</span>
          </div>
        </div>
        <div className={cn('children')}>
          {children}
        </div>
        <div className={cn('h-width', {hide})}>.</div>
      </div>
    );
  }
}

O_ScrollUp.propTypes = {
  initTop: T.number, // x position of button
  showAfter: T.number, // x position of button
  children: T.node.isRequired
};

O_ScrollUp.defaultProps = {
  showAfter: 200,
  initTop: 0
}

export default O_ScrollUp
