import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqSearch')
import O_Search from 'O_Search';
import A_Container from 'A_Container'

const nav = [
  {name: 'Transaction Log', value: 'log'},
  {name: 'Token Holders', value: 'holders'},
  {name: 'Markets', value: 'markets', mob: 'hide'},
]
class SE_HmqSearch extends Component {
  state = {
    active: nav[0].value
  }

  getNavItems(active){
    return(
      nav.map( navBtn => (
        <div
          key={'key_' + navBtn.value}
          onClick={() => this.setState({active: navBtn.value})}
          className={cn('nav-item', {active: navBtn.value === active, mobHide: navBtn.mob === 'hide'})}
        ><div>{navBtn.name}</div></div>
      ))
    )
  }

  render() {
    const {active} = this.state 
    const serchNav = this.getNavItems(active)
    return (
      <div className={cn('root')}>
        <div className={cn('header')}>
          <A_Container type="init">
            <nav className={cn('nav')}>
              {serchNav}
            </nav>
          </A_Container>

        </div>
        <div className={cn('body')}>
          <O_Search
            placeholder="Search any transaction"
            handleSubmit = {text => alert(text)}
          />
        </div>
      </div>

    )
  }
}

SE_HmqSearch.propTypes = {
};

SE_HmqSearch.defaultProps = {
}

export default SE_HmqSearch
