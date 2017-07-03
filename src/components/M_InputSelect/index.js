import React, {Component} from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_InputSelect')
import onClickOutside from 'react-onclickoutside'

class M_InputSelect extends Component {
  state = {
    value: this.props.options[0],
    isOpened: false,
    pseudoValue: ''
  }

  handleClickOutside = () => {
    this.closeMenu()
  }

  closeMenu() {
    this.setState({isOpened: false, pseudoValue: ''})
    this.node.blur()
  }

  handleInputChange = (e) => {
    const {value: pseudoValue} = e.target
    this.setState({pseudoValue});

  }

  handleMenuOpen = () => {
    this.setState({isOpened: true})
    this.node.focus()
  }

  handleOptionClick = (value) => {
    this.setState({value, isOpened: false, pseudoValue: ''})
    this.node.blur()
    this.props.onChange(value)
  }

  getListOptions(options, isOpened, value) {
    let filteredOptions, renderedOptions;
    let _value = value.replace(" ", "")
    if (_value) {
      let regStr = '';
      [..._value].forEach((c, i) => regStr = regStr + (i === 0 ? c : `.*?${c}`))
      const regExp = new RegExp(regStr, "i");
      filteredOptions = options.filter(str => regExp.test(str))
    } else {
      filteredOptions = options
    }

    if (filteredOptions.length) {
      renderedOptions = filteredOptions.map((opt, i) => {
        return (
          <ol
            key={'key_' + opt + i}
            className={cn('option')}
            onClick={() => this.handleOptionClick(opt)}
          >
            {opt}
          </ol>
        )
      })
    } else {
      renderedOptions = (
        <ol
          className={cn('option', ['empty'])}
          onClick={() => this.handleOptionClick('')}
        >No item matched <strong>{value}</strong>
        </ol>
      )
    }

    return (
      <ul className={cn('list-options', {closed: !isOpened})}>
        {renderedOptions}
      </ul>
    )
  }

  render() {
    const {options, placeholder} = this.props
    const name = this.props.name || ''
    const id = this.props.id || name
    const {value, pseudoValue, isOpened} = this.state
    const renderedOptions = this.getListOptions(options, isOpened, pseudoValue)
    const _value = isOpened ? pseudoValue : value
    return (
      <div
        className={cn('root', [isOpened && 'isOpened'])}
      >
        <div
          className={cn('wrapper')}
          onClick={this.handleMenuOpen}
        >
          <input
            type="text"
            ref={node => this.node = node}
            onChange={this.handleInputChange}

            {...{name, id, value: _value, placeholder}}
          />
        </div>

        <div className={cn('triangle', [isOpened && 'isOpened'])}/>
        {renderedOptions}
      </div>
    )
  }
}

M_InputSelect.propTypes = {};

M_InputSelect.defaultProps = {
  options: ['']
}

export default onClickOutside(M_InputSelect)
