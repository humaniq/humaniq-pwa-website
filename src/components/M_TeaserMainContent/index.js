import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_TeaserMainContent')
import M_Subscribe from 'M_Subscribe'

const M_TeaserMainContent = () => {
  return (
    <div className={cn()}>
      <div className={cn('title')}>Banking the Unbanked</div>
      <div className={cn('description')}>Humaniq is a simple and secure 4th generation mobile banking app, based on Ethereum Blockchain. Safe and strong, this tool of financial inclusion connects 2 billion unbanked people to the global economy.</div>
      <div className={cn('subscribe')}>
        <M_Subscribe onSubmit={ mail => alert(mail)} />
      </div>
    </div>
  )
}

M_TeaserMainContent.propTypes = {};

M_TeaserMainContent.defaultProps = {};

export default M_TeaserMainContent