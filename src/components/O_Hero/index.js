import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Hero')
import M_Title from 'M_Title'
import M_Subscribe from 'M_Subscribe'

const O_Hero = () =>(
  <div className={cn()}>
    <M_Title type="main">Humaniq: Banking the Unbanked</M_Title>
    <p className={cn("text")}>Humaniq is a simple and secure 4th generation mobile banking app, based on Ethereum Blockchain. Safe and strong, this tool of financial inclusion connects 2 billion unbanked people to the global economy.</p>
    <M_Subscribe />
    <p>Want to be informed? <span>Subscribe</span> to our Newsletter </p>
  </div>
)

O_Hero.propTypes = {
};

export default O_Hero