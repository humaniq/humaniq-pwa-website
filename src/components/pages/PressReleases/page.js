import React, { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import Header from './Header'
import SearchPanel from './SearchPanel'
import PreviewsContainer from './PreviewsContainer'
import A_Container from 'A_Container'

const cn = cssClassName('PressReleases');

class PressReleases extends Component {
  state = {
    showAll: false
  }

  toggleView = () => {
    this.setState({showAll: !this.state.showAll})
  }

  render() {
    const { showAll } = this.state

    return(
      <section className={cn()}>
        <img className={cn('background-img')} src="/img/design-v2/sections/common/head.svg" />
        <A_Container>

          <Header
            mix={cn('header')}
            showAll={showAll}
            toggleView={this.toggleView}
          />

          { showAll && <SearchPanel mix={cn('search-panel')} /> }

          <PreviewsContainer showAll={showAll} news={news} />

        </A_Container>
      </section>
    )
  }
}

const news = [
  {
    title: 'Huffingtonpost.com',
    date: '05/16/2017',
    text: 'Tackling Financial Exclusion With Biometric Technology'
  },
  {
    title: 'Huffingtonpost.com',
    date: '05/16/2017',
    text: 'Tackling Financial Exclusion With Biometric Technology'
  },
  {
    title: 'Huffingtonpost.com',
    date: '05/16/2017',
    text: 'Tackling Financial Exclusion With Biometric Technology'
  },
  {
    title: 'Forbes.com',
    date: '04/21/2017',
    text: 'From Here To Where? Bitcoin And The Future Of Cryptocurrency'
  },
  {
    title: 'Forbes.com',
    date: '04/21/2017',
    text: 'From Here To Where? Bitcoin And The Future Of Cryptocurrency'
  },
]

export default PressReleases
