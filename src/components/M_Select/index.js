import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Select')
import onClickOutside from 'react-onclickoutside'

const checkMark = (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10">
    <path fill="#2D9EE0" fillRule="nonzero" d="M10.778.24l-6.52 6.167-2.154-2.435C1.39 3.355.27 4.076.78 5l2.46 3.873c.304.41 1.017.822 1.73 0 .307-.41 6.62-7.71 6.62-7.71.714-.821-.203-1.54-.813-.924z"/>
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
