import React, { PropTypes } from 'react';
import catnip from 'catnip';
import './styles.scss';
const cn = catnip('a-logo');
import Logo from '-!babel-loader!svg-react-loader!./humaniq-logo.svg?name=Logo';

const A_Logo = ({darkTheme}) => {
  return (
    <a className={cn()} href="/">
      <Logo className={cn('img', {darkTheme: darkTheme})} />
    </a>
  )
}

A_Logo.propTypes = {
};

export default A_Logo