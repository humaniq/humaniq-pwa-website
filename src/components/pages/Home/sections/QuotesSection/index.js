import React, { Component } from 'react'
import * as T from 'prop-types'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('SE_Home_Quotes')

const _getQuotesSlides = quotes => {
  let res = []
  const genSlidesArray = keysName =>
    quotes.map((quote, index) => {

      return (
        <div key={`quote-${keysName + (index + 1)}`} className={cn('slide')}>
          <div className={cn('slide-content')}>
            <A_Title mix={cn('slide-title')} type="section" theme="bright">
              {quote.title}
            </A_Title>
            <p
              className={
                quote.text.length < 260 ? cn('slide-text') : cn('slide-text', { type: 'small' })
              }
            >
              {quote.text}
            </p>
            <p className={cn('slide-author')}>&mdash; {quote.author}</p>
          </div>
        </div>
      )
    })

  res = res.concat(genSlidesArray('clone_before'))
  res = res.concat(genSlidesArray('clone_middle'))
  res = res.concat(genSlidesArray('clone_after'))

  return res
}

class SE_Home_Quotes extends Component {
  state = {
    show: 0,
  }

  prev = () => {
    this.changeShow(-1)
  }

  next = () => {
    this.changeShow(1)
  }

  changeShow(n) {
    const { show: oldShow } = this.state
    const show = (oldShow + n + quotes.length) % quotes.length
    this.setState({ show })
  }


  render() {
    const { mix } = this.props
    const { show } = this.state
    const pctX = show * 25
    return (
      <section
        className={cn([mix])}
      >
        <div className={cn('slider')} style={{ transform: `translateX(-${pctX}%)` }}>
          {_getQuotesSlides(quotes)}
        </div>
        <div className={cn('slider-nav', {type: 'prev'})} onClick={this.prev} />
        <div className={cn('slider-nav', {type: 'next'})} onClick={this.next} />

        <SectionCounter mix={cn('counter')} sectionNum={4} theme="dark" />
      </section>
    )
  }
}
export default SE_Home_Quotes

SE_Home_Quotes.propTypes = {
  mix: T.string, //BEM mixin from parent block
}

const quotes = [
  {
    title: 'The world is ready for change',
    text:
      'Including the poorest in the financial system increases the value of their assets, transforming the underlying economics of financial services through digital currency - helping those who live in poverty directly.',
    author: 'Bill Gates',
    img: '/img/design-v2/sections/quotes/bill-gates2.jpg',
  },
  {
    title: 'The world is ready for change',
    text:
      'Because of technology, we can help shape the arc of history to bend it towards financial inclusion and greater human progress. Financial inclusion is a massive undertaking – one that can only be met together – across countries, sectors, and industries.',
    author: 'Ajaypal Singh Banga, MasterCard CEO',
    img: '/img/design-v2/sections/quotes/ajaypal-singh-banga.jpg',
  },
  {
    title: 'The world is ready for change',
    text:
      'Widely used digital finance has the power to transform the economic prospects of billions of people and inject new dynamism into small businesses that today are held back for lack of credit. Emerging economies have an opportunity to use mobile technologies to provide digital financial services for all, rapidly unlocking economic opportunity and accelerating social development.',
    author: 'McKinsey Global Institute Report September 2016',
    img: '/img/design-v2/sections/quotes/mckinsey-global-Institute.jpg',
  },
  {
    title: 'The world is ready for change',
    text:
      'In pyramid of development the bottom-most layer needs to be strengthened through financial inclusionimproving purchasing power of the poor.',
    author: 'Narendra Modi',
    img: '/img/design-v2/sections/quotes/narendra-modi.jpg',
  },
]

// import * as T from "prop-types";
// import './styles.scss';
// import {cssClassName} from 'utils'
// const cn = cssClassName('')
