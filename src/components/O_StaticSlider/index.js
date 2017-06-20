import React from 'react';
// import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_StaticSlider')

const O_StaticSlider = () => {
  return (
    <section className={cn()}>
      <div className="l-container">
        <div className={cn('inner')}>
          <div className={cn('texts')}>
            <p className={cn('texts-item', ['active'])}>Smart and powerful payments. We believe in transparency, and that is why Humaniq has designed the payment system using Blockchain technologies and bringing them into your pocket.</p>
            <p className={cn('texts-item')}>Biometrics: our Passport to Inclusive Banking. We believe that your identity is the strongest password. Avoiding long passwords which can be lost or hacked. </p>
            <p className={cn('texts-item')}>Digital Identity. Humaniq creates virtual profiles which evolve with people as they age. Therefore, the only thing you need to safely manage your financial assets is You, literally.</p>
          </div>
          <img className={cn('image')} src="/img/placeholder.svg" width="450" height="375"/>
        </div>
      </div>
    </section>
  )
}

O_StaticSlider.propTypes = {};

export default O_StaticSlider