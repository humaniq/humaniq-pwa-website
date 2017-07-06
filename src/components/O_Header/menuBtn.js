import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_HeaderMenuBtn')
import A_Button from 'A_Button'

class O_HeaderMenuBtn extends Component {
  render() {
    const {onClick, x, max, darkTheme} = this.props
    return (
      <A_Button onClick={() => onClick()} type="img">
        {x < max/2 ?
          <svg
            width="18px"
            height="12px"
            viewBox="291 14 18 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{transform: `scale(${1 - (0.01 * x)}) rotate(${- 180/100 * x}deg)`}}
            className={cn({darkTheme})}
          >
            <path
              d="M291,26 L309,26 L309,24 L291,24 L291,26 L291,26 Z M291,21 L309,21 L309,19 L291,19 L291,21 L291,21 Z M291,14 L291,16 L309,16 L309,14 L291,14 L291,14 Z"
              id="Shape" stroke="none" fill="#333333"/>
          </svg>
          : <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              style={{transform: `scale(${0.01 * x}) rotate(${- 180/100 * x}deg) translate(2px,-1px)`}}
              className={cn({darkTheme})}
            >
              <path fill="#253039" d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
            </svg>
        }
      </A_Button>
    )
  }
}

O_HeaderMenuBtn.propTypes = {
};

O_HeaderMenuBtn.defaultProps = {
}

export default O_HeaderMenuBtn
