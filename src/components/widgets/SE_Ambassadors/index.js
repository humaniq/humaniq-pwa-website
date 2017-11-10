import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_Ambassadors')
import Meta from './meta'
import A_Container from 'A_Container'
import O_Hero from 'O_Hero'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'
import A_Btn from 'A_Btn'
import M_Dropdown from 'M_Dropdown'
import M_Tooltip from 'M_Tooltip'
import A_Link from 'A_Link'

class SE_Ambassadors  extends Component {

  state = {
    filter: 'All',
  }

  nodes = []

  componentDidMount() {
    document.addEventListener('resize', this.forceUpdate);
    this.forceUpdate()
  }

  componentWillUnmount() {
    document.removeEventListener('resize', this.forceUpdate);
  }


  getAmbassadors(entities, filter) {
    let filtered
    if (filter == 'All') {
      filtered = entities
    } else {
      filtered = entities.filter(entity => entity.country === filter)
    }

    let _renderedAmbassadors = filtered.map((partner, i) => {
      let tooltipPlace;
      if (
        this.nodes[0]
        && this.nodes[i + 1]
        && (this.nodes[0].offsetLeft + this.nodes[i + 1].offsetLeft > 200)
      ) {
        tooltipPlace = 'left'
      } else {
        tooltipPlace = 'right'
      }

      return (
        <div
          className={cn('list-item')}
          key={partner.name}
          ref={ node => this.nodes[i + 1] = node}
        >

          <A_Image
            src={partner.logoLink2x}
            alt={partner.name}
          />
          <span className={cn('tooltip', {type: tooltipPlace})}>
            <M_Tooltip type={tooltipPlace}>
              <A_H type='tooltip'>{partner.name}</A_H>
              <span onClick={() => this.setState({filter: partner.country})} style={{cursor: 'pointer'}}>
                <A_H type='tooltip-sub'>{partner.country}</A_H>
              </span>
              {partner.bio}
            </M_Tooltip>
          </span>
          <span className={cn('link')}>
            <A_Link to={partner.link} external type="block" >{' '}</A_Link>
          </span>
        </div>
      )
    })

    for (let i = 0; i < 7; i++) {
      _renderedAmbassadors.push(
        <div
          className={cn('list-item-empty')}
          key={'key_' + i}
        />
      )
    }
    return _renderedAmbassadors
  }

  render() {
    const {countries, entities, openPopup} = this.props
    const options = ['All', ...countries]

    const {filter} = this.state
    return (
      <div className={cn('section-wrapper')}>
        <Meta />
        <A_Container type="equal">
          <O_Hero
            img={{src: "/img/illustrations/ambassadors.svg", alt: "ambassadors"}}
          >
            <A_H type="hero">Our Global Team</A_H>
            <A_P type="hero">At Humaniq, everything we do is motivated by our wish to provide the most widespread access to banking possible.</A_P>
          </O_Hero>
          <A_H type="section">Ever growing network</A_H>
          <A_P type="third">We want to communicate directly with the people we wish to serve: the unbanked. People without access to banking live in very rural areas. This is why we’ve started our Ambassador Program. Our ambassadors live in these developing countries and know the culture well. They are helping to promote cryptocurrencies in the Global South, as well as explaining the Humaniq project and app to the people in their countries.</A_P>
          <div className={cn('form')}>
            <div className={cn('form-select')}>
              <M_Dropdown
                selected={filter}
                options={options}
                onChange={filter => this.setState({filter})}
              />
            </div>
            <A_Btn
              type='popup-link'
              onClick = {() => openPopup('ambasadors')}
            >Join Ambassadors Program</A_Btn>
          </div>
          <div className={cn('list-wrapper')}>
            <div
              className={cn('list')}
              ref={ node => this.nodes[0] = node}
            >
              {this.getAmbassadors(entities, filter)}
            </div>
          </div>
        </A_Container>
        {/*<A_Container type="equal">*/}

          {/*<O_TextUsHere*/}
            {/*{...{*/}
              {/*title: 'Join Ambassadors',*/}
              {/*text: 'If you believe you can help your community, join Humaniq global Ambassador\'s programme.',*/}
              {/*link: {*/}
                {/*linkText: 'Join Humaniq Network',*/}
                {/*url: 'mailto:info@humaniq.com'*/}
              {/*}*/}
            {/*}}*/}
          {/*/>*/}
        {/*</A_Container>*/}
      </div>
    )
  }
}

SE_Ambassadors .propTypes = {
  entities: T.array.isRequired,
  countries: T.array.isRequired
};

export default SE_Ambassadors
