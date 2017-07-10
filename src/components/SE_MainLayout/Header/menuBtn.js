import React from 'react';
import * as T from "prop-types";
import A_Button from 'A_Button'

const HeaderMenuBtn = ({x, max, theme}) => {

  const color = theme === 'dark' ? '#179cde' : '#fff'
  return (
    <A_Button type="img">
      {x < max/2 ?
        <svg
          width="22px" height="14px" viewBox="0 0 22 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
          style={{transform: `scale(${1 - (0.01 * x)}) rotate(${- 180/100 * x}deg) translate(0px, 2px)`}}
        >
          <g id="Home-v2" stroke={color} strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <path d="M0,13 L20,13" strokeWidth="2"></path>
            <path d="M0,7 L20,7" strokeWidth="2"></path>
            <path d="M0,1 L20,1" strokeWidth="2"></path>
          </g>
        </svg>
    : <svg
          width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
          style={{transform: `translate(0px, 3px) scale(${0.01 * x}) rotate(${- 180/100 * x}deg)`}}
        >
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <g id="Header-/-Desktop-/-LightBg-Copy" transform="rotate(45) translate(5, -10)" stroke={color} strokeWidth="2.25">
                <path d="M0,10 L20,10" id="Line"></path>
                <path d="M0,10 L20,10" id="Line" transform="translate(10, 10) scale(1, -1) rotate(90) translate(-10, -10) "></path>
            </g>
          </g>
        </svg>
      }
    </A_Button>)
}

HeaderMenuBtn.propTypes = {
  theme: T.oneOf([
    'dark', // black btn
    'light', // white btn
  ]).isRequired,
  x: T.number.isRequired, // dynamic animation parameter from react-motion
  max: T.number.isRequired, // max value of animation parameter
};

HeaderMenuBtn.defaultProps = {
  theme: 'dark'
};

export default HeaderMenuBtn
