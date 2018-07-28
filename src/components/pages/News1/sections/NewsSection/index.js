import React from 'react'
import * as T from 'prop-types'
import A_Title from 'A_Title_H'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_News1_News')

const handleLinkClick = (name) => {
  if (window.ga) window.ga('send', 'event', 'other', 'news-click-' + name);
}




const _createLinks = (links) => (
    links.map(({title, src, url}, index) => {
      return (
                <div className='item' key={`newsLink-${index + 1}`}>
                    <div className='src'>{src}</div>
                    <a className={'link'} href={url} title={title} target="_blank"
                       onClick={() => {
                         handleLinkClick(index)
                       }}>
                        {title}
                    </a>
                </div>

      )
    }
    )
)


const mainTitle = {
  img: "/img/news/main-1.jpg",
  title: "Humaniq Recognised As Leading “Blockchain For Social Good” Use Case At UK Parliament Reception",
  url: "https://ethereumworldnews.com/humaniq-recognised-as-leading-blockchain-for-social-good-use-case-at-uk-parliament-reception/",
  src: "ethereumworldnews.com"
}

const articleList = [
  {
    title: "Global goals for both business and development allow everybody to win",
    url: "https://blog.humaniq.co/sglobal-goals-for-both-business-and-development-allow-everybody-to-win-7c310918304",
    src: "blog.humaniq.co"
  },
  {
    title: "Success: first working hybrid Blockchain and 100,000-strong community",
    url: "https://blog.humaniq.co/success-first-working-hybrid-blockchain-and-100-000-strong-community-7ed4d701084",
    src: "blog.humaniq.co"
  },
  {
    title: "Africa calling: first hybrid Blockchain to accelerate growth of digital economy",
    url: "https://blog.humaniq.co/africa-calling-first-hybrid-blockchain-to-accelerate-growth-of-digital-economy-6daca33e23be",
    src: "blog.humaniq.co"
  }
]

class SE_News1_News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestactive: false
    };
  }

  onMouseOverHandler = () => {
    this.setState({latestactive:true})
  }

  onMouseOutHandler = () => {
    this.setState({latestactive:false})
  }

  render() {
    return (
            <section className={cn([this.mix])}>
                <A_Title type="hero" mix={cn('text-title')} theme="dark">
                    Latest news
                </A_Title>

                <div className={cn('last-one')}>
                    <div className='img'>
                        <img src={mainTitle.img}/>
                    </div>
                    <div className='text'>
                        <div className='src'>{mainTitle.src}</div>
                        <div className='title' onMouseOut={this.onMouseOutHandler.bind(this)}  onMouseOver={this.onMouseOverHandler.bind(this)}>
                            <a href={mainTitle.url} className={this.state.latestactive ? 'active' : ''} target='_blank'>{mainTitle.title}</a>
                        </div>
                        <div className='buttons'>
                            <a className={this.state.latestactive ? 'button read-more active' : 'button read-more' } href={mainTitle.url} onMouseOut={this.onMouseOutHandler.bind(this)}  onMouseOver={this.onMouseOverHandler.bind(this)} target='_blank'>Read more</a>
                            <a className='link-sec' href="https://www.facebook.com/humaniq.co/" target='_blank'>
                                Join our Facebook
                                <img src="/img/link.svg"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cn('article-list')}>
                    {_createLinks(articleList)}
                </div>

                <div className={cn('more-news')}>
                    <a className='button' href='https://blog.humaniq.co/' target='_blank'>See All NEWS</a>
                </div>
            </section>
    )
  }
}

export default SE_News1_News

SE_News1_News.propTypes = {
  mix: T.string, //BEM mixin from parent block
}
