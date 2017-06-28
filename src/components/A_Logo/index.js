import React, { PropTypes } from 'react';
import catnip from 'catnip';
import styles from './styles.scss';
const cn = catnip('a-logo');
// import A_Link	from 'A_Link'

const A_Logo = () =>(
  <a className={cn()} href="/">
    <img className={cn('img')} src="/img/humaniq-logo.svg" alt="humaniq.co"/>
  </a>
)

A_Logo.propTypes = {
};

export default A_Logo