import React from 'react';
import * as T from "prop-types";
import A_Image from 'A_Image'
import A_Link from 'A_Link'

const A_Logo = ({theme}) => {
  return (
      <A_Link to="/" >
        <A_Image src={`/img/humaniq-logos/main-${theme}.svg`} alt="humaniq-logo" link/>
      </A_Link>
  )
}

A_Logo.propTypes = {
  theme: T.oneOf([
    'dark', // black logo
    'light', // white logo
  ]).isRequired
};

A_Logo.defaultProps = {
  theme: 'dark'
};



export default A_Logo
