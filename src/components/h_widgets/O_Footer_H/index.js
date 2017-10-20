import React from 'react';
import * as T from "prop-types";
import A_Logo_H from 'A_Logo_H'
import M_SocialLinks_H from 'M_SocialLinks_H'
import FooterLinks from './FooterLinks'
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('O_Footer_H')

const O_Footer_H = ({mix}) => (
  <footer className={cn([mix])}>
    <div className={cn('top')}>
      <A_Logo_H
        mix={cn('logo')}
      />
      <M_SocialLinks_H
        mix={cn('social-links')}
        type='footer'
      >
        Join to make a difference with humaniq
      </M_SocialLinks_H>
    </div>

    <FooterLinks mix={cn('bottom')} />

  </footer>
)

export default O_Footer_H

O_Footer_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
};