import React from 'react';
// import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_SimpleSlider')

const O_SimpleSlider = () => {
  return (
    <section className={cn()}>
      <div className="l-container">
        <div className={cn('inner')}>
          <div className={cn('slide')}>
            <img className={cn('image')} src="/img/placeholder.svg" width="220" height="220"/>
            <div className={cn('text')}>
              <h4 className="a-h4">
                <a className="a-h4__link" href="#">From Here To Where? Bitcoin And The Future Of Cryptocurrency.</a>
              </h4>
              <p className={cn('description')}>Smart and powerful payments. We believe in transparency, and that is why Humaniq has designed the payment system using Blockchain technologies and bringing them into your pocket.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

O_SimpleSlider.propTypes = {};

export default O_SimpleSlider