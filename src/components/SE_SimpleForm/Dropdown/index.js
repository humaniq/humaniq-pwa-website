import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Dropdown')
import onClickOutside from 'react-onclickoutside'

class M_Dropdown extends Component {
  state = {
    isOpened: false
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

  render() {
    const {options, selected} = this.props
    const {isOpened} = this.state
    return (
      <span className={cn('root')} onClick={this.handleClick}>
        <div className={cn('select')}>
          <div className={cn('select-text')}>{selected}</div>
        </div>
        {this.getListOptions(options, isOpened, selected)}
      </span>

    )
  }
}

M_Dropdown.propTypes = {
  options: T.array.isRequired,
  selected: T.string.isRequired
};

M_Dropdown.defaultProps = {
}

export default onClickOutside(M_Dropdown)



