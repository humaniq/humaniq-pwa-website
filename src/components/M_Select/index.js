import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Select')
import onClickOutside from 'react-onclickoutside'

const checkMark = (
  <svg width="21px" height="18px" viewBox="0 0 21 18" version="1.1">
    <g id="UI-Kit" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="UI" transform="translate(-1199.000000, -1003.000000)" fillRule="nonzero" fill="#2D9EE0">
        <g id="Footer/Mobile/Language" transform="translate(880.000000, 908.000000)">
          <g id="notify-checkmark-copy" transform="translate(319.000000, 95.000000)">
            <path d="M18.7589418,0.438830362 L6.8062166,11.7461563 L2.85678419,7.28143172 C1.55057833,6.15155508 -0.503742812,7.47316835 0.430973314,9.1679833 L4.94020822,16.2690868 C5.50001074,17.0223378 6.8062166,17.7755889 8.1141344,16.2690868 C8.67564884,15.5158357 20.2517485,2.13535724 20.2517485,2.13535724 C21.5596663,0.628855068 19.8785468,-0.689334334 18.7589418,0.440542297 L18.7589418,0.438830362 Z" id="Shape" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

class M_Select extends Component {
  state = {
    value: this.props.value || this.props.options[0].value,
    isOpen: false
  }

  // componentWillUnmount() {
  //   if (!document.removeEventListener && document.detachEvent) {
  //     document.detachEvent('ontouchstart', this.handleTouchOutside);
  //   } else {
  //     document.removeEventListener('touchstart', this.handleTouchOutside);
  //   }
  // }
  //
  // toggleTouchOutsideEvent(enabled) {
  //   if (enabled) {
  //     if (!document.addEventListener && document.attachEvent) {
  //       document.attachEvent('ontouchstart', this.handleTouchOutside);
  //     } else {
  //       document.addEventListener('touchstart', this.handleTouchOutside);
  //     }
  //   } else {
  //     if (!document.removeEventListener && document.detachEvent) {
  //       document.detachEvent('ontouchstart', this.handleTouchOutside);
  //     } else {
  //       document.removeEventListener('touchstart', this.handleTouchOutside);
  //     }
  //   }
  // }

  // handleTouchOutside(event) {
  //   // handle touch outside on ios to dismiss menu
  //   if (this.wrapper && !this.wrapper.contains(event.target)) {
  //     this.closeMenu();
  //   }
  // }

  handleClickOutside = evt => {
    this.closeMenu()
  }

  closeMenu(){
    this.setState({isOpen:false})
  }

  handleChange = (value) => {
    this.closeMenu()
    this.props.onChange(value)
    this.setState({value});
  }

  handleClick = () =>{
    if(!this.state.isOpen)
      this.setState({isOpen: true})
  }

  getListOptions(options, isOpen, value) {
    const renderOptions = options.map(opt => {
      const selected = value === opt.value
      return (
        <ol
          value={opt.value}
          key={'key_' + opt.value}
          className={cn('option', {selected})}
          onClick={() => this.handleChange(opt.value)}
        >
          {opt.label}
          {selected &&
            <span className={cn('check-mark')}>
              {checkMark}
            </span>
          }
        </ol>
      )
    })

    return (
      <ul className={cn('list-options', {closed: !isOpen})}>
        {renderOptions}
      </ul>
    )
  }

  render() {
    const {options} = this.props
    const name = this.props.name || ''
    const id = this.props.id || name
    const {value, isOpen} = this.state
    const { label } = options.find( option => option.value === value)
    return (
      <div className={cn('root', {isOpen})} onClick={this.handleClick}>
        <select name={name} id={id}>
        </select>
        <div className={cn('label')}>{label}</div>
        <div className={cn('triangle')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
            <path fill="#89898B" stroke="#89898B" d="M5 0l4 5H1z"/>
          </svg>
        </div>
        {this.getListOptions(options, isOpen, value)}
      </div>
    )
  }
}

M_Select.propTypes = {};

M_Select.defaultProps = {
  options: [{value: '', label: ''}]
}

export default onClickOutside(M_Select)
