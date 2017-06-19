import React from 'react';
import * as T from "prop-types";
import catnip from 'catnip';
import './styles.scss';
const cn = catnip('O_Footer');

const O_Footer = () => {
  return (
    <footer className={cn('root')}>
      © Humaniq 2017. All Rights Reserved.
    </footer>
  )
}


O_Footer.propTypes = {};


export default O_Footer