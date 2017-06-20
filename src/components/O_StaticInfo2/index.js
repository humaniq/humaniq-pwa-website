import React from 'react';
// import * as T from "prop-types";
// import './styles.scss';
import {cssClassName} from 'utils'
import A_H3 from 'A_H3'
const cn = cssClassName('O_StaticInfo')

const O_StaticInfo2 = () => {
  return (
    <section className={cn()}>
      <div className="l-container">
        <div className={cn('inner')}>
          <img className={cn('image')} src="/img/placeholder.svg" width="450" height="375"/>
          <div className={cn('text')}>
            <A_H3 className="accent">The Power of Blockchain.</A_H3>
            <p>Join the Humaniq Forum—a public discussion board for entrepreneurs around the world. Connect with other entrepreneurs, find beta users, learn from experienced founders, and get advice on how to overcome early challenges.</p>
            <p>The Humaniq community brings together over one billion investors, accelerators, and companies into one global network. Connect with them and join our community.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

O_StaticInfo2.propTypes = {};

export default O_StaticInfo2