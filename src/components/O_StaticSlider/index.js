import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import M_DotIndicator from 'M_DotIndicator'
const cn = cssClassName('O_StaticSlider')

const slides = [
  {
    text: "<p><strong>Biometrics: our Passport to Inclusive Banking.</strong>We believe that your identity is the strongest password. Avoiding long passwords which can be lost or hacked. </p>",
    html: "<p><strong>Smart and powerful payments.</strong> We believe in transparency, and that is why Humaniq has designed the payment system using Blockchain technologies and bringing them into your pocket.</p>",
    img: '/img/placeholder.svg'
  },
  {
    text: "<p><strong>Biometrics: our Passport to Inclusive Banking.</strong>We believe that your identity is the strongest password. Avoiding long passwords which can be lost or hacked. </p>",
    html: "<p><strong>Biometrics: our Passport to Inclusive Banking.</strong>We believe that your identity is the strongest password. Avoiding long passwords which can be lost or hacked. </p>",
    img: '/img/placeholder.svg'
  },
  {
    text: "<p><strong>Biometrics: our Passport to Inclusive Banking.</strong>We believe that your identity is the strongest password. Avoiding long passwords which can be lost or hacked. </p>",
    html: "<p>Digital Identity. Humaniq creates virtual profiles which evolve with people as they age. Therefore, the only thing you need to safely manage your financial assets is You, literally.</p>",
    img: '/img/placeholder.svg'
  }
]
class O_StaticSlider extends Component {
  state ={
    active: 0
  }

  getText(){
    return(
      slides.map((slide, i) =>{
        const active = i === this.state.active ? 'active' : null
        return(
          <p key={'key_' + i} className={cn('texts-item', [active])} onClick={() => this.onClick(i)} dangerouslySetInnerHTML={{ __html: slide.html}}/>
        )
      }
      )
    )
  }

  onClick = (active) => {
    this.setState({active})
  }

  render() {
    const {active} = this.state
    return (
      <section>
        <div className="l-container">
          <div className={cn('inner')}>
            <div className={cn('texts')}>
              {this.getText()}
            </div>
            <div className={cn('indicator')}>
              <M_DotIndicator count={slides.length} active={active} onClick={this.onClick} />
            </div>
            <img className={cn('image')} src="/img/placeholder.svg" width="450" height="375"/>
          </div>
        </div>
      </section>
    )
  }
}

O_StaticSlider.propTypes = {
};

O_StaticSlider.defaultProps = {
}

export default O_StaticSlider
