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
    if (this.state.hide && (window.pageYOffset > 200)) {
      this.setState({hide: false})
    } else if (!this.state.hide && (window.pageYOffset < 200)) {
      this.setState({hide: true})
    }
  }

  render() {
    const {initTop, children} = this.props
    const {hide} = this.state

    return(
      <div className={cn('wrapper')}>
        <div className={cn('root', {hide})} onClick={() => window.scrollTo(0, 0)}
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
  children: T.node.isRequired
};

O_ScrollUp.defaultProps = {
  initTop: 0
}

export default O_ScrollUp
