import React, {Component} from 'react';
// import * as T from "prop-types";
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
    isOpened: false
  }


  handleClickOutside = () => {
    this.closeMenu()
  }

  closeMenu(){
    this.setState({isOpened:false})
  }

  handleChange = (value) => {
    this.closeMenu()
    this.props.onChange && this.props.onChange(value)
    this.setState({value});
  }

  handleClick = () =>{
    if(!this.state.isOpened)
      this.setState({isOpened: true})
  }

  getListOptions(options, isOpened, value) {
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
      <ul className={cn('list-options', {closed: !isOpened})}>
        {renderOptions}
      </ul>
    )
  }

  render() {
    const {options} = this.props
    const name = this.props.name || ''
    const id = this.props.id || name
    const {value, isOpened} = this.state
    const { label } = options.find( option => option.value === value)
    return (
      <div className={cn('root', {isOpened})}
           onClick={this.handleClick}
      >
        <select name={name} id={id} />
        <div className={cn('label')}>{label}</div>
        <div className={cn('triangle')} />
        {this.getListOptions(options, isOpened, value)}
      </div>
    )
  }
}

M_Select.propTypes = {};

M_Select.defaultProps = {
  options: [{value: '', label: ''}]
}

export default onClickOutside(M_Select)
