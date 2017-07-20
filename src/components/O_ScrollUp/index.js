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
    const initTop = this.props.initTop || 70
    const {hide} = this.state

    return(
      <div className={cn('root', {hide})} onClick={() => window.scrollTo(0, 0)}
           style={{top: 0, paddingTop: initTop}}
      >
        <span className={cn('icon')}><A_Image src="/img/icons/download-3@2x.png" alt='go up'/></span>
        <span className={cn('text')}>Go up</span>
      </div>
    );
  }
}

O_ScrollUp.propTypes = {
  initTop: T.string, // x position of button
  children: T.node.isRequired
};

O_ScrollUp.defaultProps = {
}

export default O_ScrollUp
