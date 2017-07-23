import React , { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Search');
import A_Container from 'A_Container';
import A_H from 'A_H';


class O_Search extends Component {
  state = {
    inActive: !this.props.value,
    value: this.props.value || ''
  }

  onSubmit = (e) =>{
    e.preventDefault()
    const {value} = this.state
    if(value){
      this.props.handleSubmit(value)
    }
  }

  render() {
    const { inActive, value } = this.state;
    const {placeholder} = this.props

    return (
      <div>
        <A_Container type='wide'>
          <A_H type='search'>Welcome to Humaniq wiki</A_H>
          <form action="" className={cn(`search ${ inActive ? 'o-search__input--focused': '' }`)} onSubmit={this.onSubmit}>
            <input
              type="text"
              className={cn('input', {inActive})}
              placeholder={placeholder}
              value = {value}
              onChange= {e => this.setState({value: e.target.value})}
              onFocus={() => this.setState({ inActive: true })}
              onBlur={() => this.setState({ inActive: false })}
            />
            <button className={cn('submit')} type="submit">
              <svg className={cn('search-icon')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                <g fill="none" transform="translate(-1 -1)">
                  <path fill="none" d="M0 0h20v20H0z"/>
                  <path className={cn('icon-path')} d="M13.54 12.2l-1.429 1.4 4.906 4.907a.995.995 0 0 0 1.418.003.997.997 0 0 0 0-1.414L13.539 12.2z"/>
                  <circle className={cn('icon-circle')} cx="8" cy="8" r="6.5"/>
                </g>
              </svg>
            </button>
          </form>
        </A_Container>
      </div>
    )
  }
}


O_Search.propTypes = {
  placeholder: T.string.isRequired,
  handleSubmit: T.func.isRequired
};

export default O_Search