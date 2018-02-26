import React, { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import SearchPanel from './SearchPanel'
import PressPreview from './PressPreview'
import A_Container from 'A_Container'
import A_Title_H from 'A_Title_H'
import A_Btn from 'A_Btn'

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
      <A_Container type='section-clean' mix={cn()}>
        <div className={cn('header')}>
          <A_Title_H
            type='section'
            mix={cn('title')}
          >
            Press Releases
          </A_Title_H>
          <A_Btn
            type='material-r-btn-blue'
            mix={cn('show-all')}
            onClick={this.toggleView}
          >
            All releases
          </A_Btn>
          <A_Btn
            type='material-r-btn-blue'
            mix={cn('download-presskit')}
          >
            Download presskit
          </A_Btn>
        </div>
        {showAll && <SearchPanel />}
        {!showAll && (
          <div>
            <A_Title_H
              type='subtitle'
              theme='blue'
              mix={cn('subtitle')}
            >
              The most popular
            </A_Title_H>
            <div className={cn('previews-container')}>
              {news.map(({title, date, text}) => (
                <PressPreview
                  mix={cn('preview')}
                  title={title}
                  date={date}
                  text={text}
                />
              ))}
            </div>
          </div>
        )}

      </A_Container>
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
    title: 'Forbes.com:',
    date: '04/21/2017',
    text: 'From Here To Where? Bitcoin And The Future Of Cryptocurrency'
  },
  {
    title: 'Forbes.com:',
    date: '04/21/2017',
    text: 'From Here To Where? Bitcoin And The Future Of Cryptocurrency'
  },
]

export default PressReleases
