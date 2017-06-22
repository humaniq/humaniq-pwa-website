import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Teaser')
// import A_H1 from 'A_H1'
import M_Subscribe from 'M_Subscribe'
const O_Teaser = () => {

  return (
    <section className={cn()}>
      <div className="l-container">
        <div className={cn('inner')}>
          <div className={cn('title')}>Banking the Unbanked</div>
          <div className={cn('lead')}>Humaniq is a simple and secure 4th generation mobile banking app, based on Ethereum Blockchain. Safe and strong, this tool of financial inclusion connects 2 billion unbanked people to the global economy.</div>
          <div className={cn('subscribe')}>
            <M_Subscribe onSubmit={ mail => alert(mail)} />
          </div>
        </div>
      </div>
    </section>
  )
}

O_Teaser.propTypes = {
};

O_Teaser.defaultProps = {

};

export default O_Teaser