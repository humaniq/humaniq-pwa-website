import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Partners')
import Meta from './meta'
import A_Container from 'A_Container'
import O_Hero from 'O_Hero'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'
import A_Btn from 'A_Btn'
import M_Dropdown from 'M_Dropdown'


class SE_Partners extends Component {
  state = {
    filter: 'All'
  }

  getPartners(entities, filter){
    let filtered
    if(filter == 'All'){
      filtered = entities
    } else {
      filtered = entities.filter( entity => entity.type === filter)
    }

    return (
      filtered.map( partner =>
        <div className={cn('partner-list-item')} key={partner.title}>
          <A_Image src={partner.logoLink} alt={partner.title}/>
        </div>
      )
    )
  }

  render() {
    const {types, entities} = this.props
    const options =['All', ...types]

    const {filter} = this.state
    console.log(filter, 'filter')
    return (
      <div>
        <Meta />
        <A_Container type="equal">
          <O_Hero img={{src:"/img/placeholder-squared.svg", alt:"parners"}}>
            <A_H type="hero">Join our Community</A_H>
            <A_P type="hero">Humaniq is proud of its wide partnership network which includes everybody from fintech companies and Blockchain communities to publishing media and app developers.</A_P>
          </O_Hero>
          <A_H type="section">Ever growing network</A_H>
          <A_P type="third">We believe in the services that Humaniq partners provide, to support us in raising standards and making excellence a habit. Our partners create and deliver cutting-edge technologies and Blockchain solutions vital to achieving financial inclusion for everybody. They include independent consultants who help us to implement new solutions, laboratories who work with us to test products, Blockchain communities, and many more.</A_P>
          <div className={cn('form')}>
            <span className={cn('form-select')}>
              <M_Dropdown
                selected={filter}
                options={options}
                onChange={filter => this.setState({filter})}
              />
            </span>
            <A_Btn
              type="link-standart-form"
              to='/form/join'
            >Join Humaniq Network</A_Btn>
          </div>
          <div className={cn('partner-list')}>
            {this.getPartners(entities, filter)}
          </div>
        </A_Container>
      </div>
    )
  }
}

SE_Partners.propTypes = {
  entities: T.array.isRequired,
  types: T.array.isRequired
};

export default SE_Partners