import React from 'react';
// import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_H3 from 'A_H3'
const cn = cssClassName('O_StaticInfo')

const O_StaticInfo = ({modificator}) => {
  return (
    <section className={cn([modificator])}>
      <div className="l-container">
        <div className={cn('inner')}>
          <div className={cn('text')}>
            <A_H3 className={modificator}>The Power of Blockchain.</A_H3>
            <p>Humaniq harnesses the power of Blockchain and AI technologies to break down barriers to earning, spending, and accessing finance. We put you in total control of all your transactions. Payments are entirely transparent and accessible at all times, and with our Blockchain-based app you can track all your funds.</p>
          </div>
          <img className={cn('image')} src="/img/placeholder.svg" width="450" height="300"/>
        </div>
      </div>
    </section>
  )
}

O_StaticInfo.propTypes = {};

export default O_StaticInfo