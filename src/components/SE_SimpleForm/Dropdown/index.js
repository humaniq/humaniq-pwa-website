import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Dropdown2')
import onClickOutside from 'react-onclickoutside'
import A_InputText from 'A_InputText'

class M_Dropdown2 extends Component {
  state = {
    isOpened: false,
    inActive: !!this.props.value,
    value: this.props.value || '',
  }

  handleClickOutside = () => {
    this.closeMenu()
  }

  closeMenu(){
    this.setState({isOpened:false})
  }

  handleClick = () =>{
    if(!this.state.isOpened)
      this.setState({isOpened: true})
  }

  handleChange = (selected) => {
    this.closeMenu()
    this.props.onChange(selected)
  }

  getListOptions(options, isOpened, selected) {
    const renderOptions = options.map(option => {
      return (
        <ol
          className={cn('list-options-item', {selected: selected === option})}
          value={option}
          key={'key_' + option}
          onClick={() => this.handleChange(option)}
        >{option}</ol>
      )
    })

    return (
      <div className={cn('list-wrapper', {closed: !isOpened})}>
        <ul className={cn('list-options')}>
          {renderOptions}
        </ul>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      inActive: nextProps.focus ? true : !!nextProps.value
    })
  }

  render() {
    const {options, selected} = this.props;
    const {isOpened} = this.state;
    return (
      <span className={cn('root')} onClick={this.handleClick}>
        <div className={cn('select', {isOpened})}>
          <form action="" className={cn('form')}>
            <A_InputText
              label="Your country"
              onFocus = {() => this.setState({windowShow: true, inActive: true})}
              onBlur={() => this.setState({inActive: false})}
              handleChange={() => {}}
              required data-reactid=".0.0"
            />
            <div className={cn('selected')}>
              {selected}
            </div>
          </form>
        </div>
        {this.getListOptions(options, isOpened, selected)}
      </span>

    )
  }
}

M_Dropdown2.propTypes = {
  options: T.array.isRequired,
  selected: T.string.isRequired
};

M_Dropdown2.defaultProps = {
}

export default onClickOutside(M_Dropdown2)



