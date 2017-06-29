import React from 'react';
//import * as T from "prop-types";
import catnip from 'catnip';
import './styles.scss';
const cn = catnip('a-logo');
import A_Link from 'A_Link'
import Logo from '-!babel-loader!svg-react-loader!./humaniq-logo.svg?name=Logo';

const A_Logo = ({darkTheme}) => {
  return (
    <span className={cn({darkTheme})}>
      <A_Link to="/">
        <Logo />
      </A_Link>
    </span>
  )
}

A_Logo.propTypes = {};

export default A_Logo
