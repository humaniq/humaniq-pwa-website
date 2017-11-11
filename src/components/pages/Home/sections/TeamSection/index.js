import React, { Component } from 'react'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
//import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import {cssClassName} from 'utils'
import A_Image from 'A_Image/index'
// import M_Partners from './Partners'
const OwlCarousel = __CLIENT__ ? require('react-owl-carousel2') : {}

const cn = cssClassName('SE_Home_Team')

const teamOptions = {
  items: 3,
  loop: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    }
  }
}

const mobPartnersOptions = {
  items: 3,
  loop: true,
  nav: false,
  dots: false,
  center: true
}

// const events = {
//   onDragged: function(event) {...},
//   onChanged: function(event) {...}
// };

class SE_Home_Team extends Component {

  _getHazemName = () => <span>Hazem Danny <br/>Al-Nakib</span>

  getTeamSlides(){
    return (
      people.map(({imgSrc, name, position}, i) =>
        <div className={cn('slide')} key={i}>
          <div className={cn('slide-image')}>
            <A_Image src={imgSrc} rounded/>
          </div>
          <p className={cn('slide-title')}>
            {name.search('Al-Nakib') === -1 ? (name) : (this._getHazemName())}
          </p>
          <p className={cn('slide-text')}>{position}</p>
        </div>
      )
    )
  }

  getMobPartners(){
    return(
      partnersList.map(({name,img}) => (
        <a
          href="#"
          key={`partner-${name}`}
          className={cn('partner-link')}
        >
          <img
            src={img}
            className={cn('partner-logo')}
          />
        </a>
      ))
    )
  }

  render() {
    const {mix} = this.props
    const _renderSlides = this.getTeamSlides()
    // const _renderMobPartners = this.getMobPartners()

    return (
      <section className={cn([mix])}>
        <div className={cn('content')}>
          <A_Title
            mix={cn('title')}
            type='section'
            theme='dark'
          >
            People behind <br /> Humaniq project
          </A_Title>

          {/*<div className={cn('slider-wrap')}>*/}
            {/*<div className={cn('slider')} style={{transform: `translateX(-${pctX}px)`}}>*/}
              {/*{_renderSlides}*/}
            {/*</div>*/}
          {/*</div>*/}

          {__CLIENT__ &&
            <div>
              <div className={cn('team-slider')}>
                <OwlCarousel ref="team" options={teamOptions}  >
                  {_renderSlides}
                </OwlCarousel>
              </div>

              <div className={cn('nav-prev')} onClick={() => this.refs.team.prev()} />
              <div className={cn('nav-next')} onClick={() => this.refs.team.next()} />

              {/*<div className={cn('partners-slider')}>*/}
                {/*<OwlCarousel ref="mobPartners" options={mobPartnersOptions}  >*/}
                  {/*{_renderMobPartners}*/}
                {/*</OwlCarousel>*/}
              {/*</div>*/}
            </div>
          }

        </div>

        {/*<M_Partners mix={cn('partners')}/>*/}

        <SectionCounter
          sectionNum={13}
          theme='bright'
        />
      </section>
    )
  }
}

SE_Home_Team.propTypes = {
};

SE_Home_Team.defaultProps = {
}

export default SE_Home_Team

const imgPath = 'img/team_g'

const advisers = [
  {
    name: 'Dinis Guarda',
    position: 'Adviser',
    bio: 'Digital age influencer Dinis is the founder of digital communications consultancy Ztudium and manager of websites <a href="https://intelligenthq.com" target="_blank">intelligenthq.com</a>, <a href="https://openbusinesscouncil.org" target="_blank">openbusinesscouncil.org</a>, <a href="https://tradersdna.com" target="_blank">tradersdna.com</a>, and <a href="https://hedgethink.com" target="_blank">hedgethink.com</a>. Dinis also co-founded BlockchainAge, a blockchain research and tech influencer, platform, book and film; led the digital strategy for invstr.com; authored books including The Next Tsunami: Blockchain plus AI and IOT and led a digital master course in London for Group INSEEC. He has been ranked as in the top 100 Blockchain and Fintech influencers.',
    imgSrc: `${imgPath}/dinis_guarda.png`
  },
  {
    name: 'Dmitry Kaminskiy',
    position: 'Adviser',
    bio: 'An innovative entrepreneur and investor active in Biotech, Fintech, Blockchain and artificial intelligence, Dmitry is co-founder of the Deep Knowledge Ventures investment fund, focused on investments in AI and Deeptech. He adheres to the principle of impact investment in all his business activities, believing that business should make a social impact, and he supports the deployment of Blockchain for Good, which led to his decision to support Humaniq from its inception.',
    imgSrc: `${imgPath}/dmitry_kaminskiy.png`
  },
  {
    name: 'David Applefield',
    position: 'Adviser',
    bio: 'Is an American writer and media specialist living in Paris. He has as spent his career developing creative and innovative solutions for business leaders, heads of state, ministries, NGOs, and other not-for- profit foundations. He is the Financial Times representative for Africa, the Middle East and emerging markets.',
    imgSrc: `${imgPath}/david_applefield.png`
  },
  {
    name: 'Iggy Bassi',
    position: 'Adviser',
    bio: 'Is the co-founder and serves as a Director of GADCO, a venture focused on sustainable agriculture and livelihood development in West Africa with LATAM technologies. He has a long track record in building companies in the technology, finance, and impact markets – in both emerged and emerging markets. Over the past 20 years he has advised many global companies (inc. Fortune 500), sovereigns, and entrepreneurs on solving problems in competitiveness, sustainability, scenario planning, and structuring complex transactions. He works at the intersection of technology, sustainability, food security, global security, and innovative thinking around the collaborative economy.',
    imgSrc: `${imgPath}/iggy_bassi.png`
  },
  {
    name: 'Matt McKibbin',
    position: 'Adviser',
    bio: 'Is a business development guru and a decentralization evangelist. He became interested in Bitcoin and the blockchain technology in 2012. Technologically savvy, he is an extroverted connector driven by a desire to see transformative and decentralized technologies positively affect the 7 billion people on the planet. He is based in the Washington DC metro area.',
    imgSrc: `${imgPath}/matt_mckibbin.png`
  },
  {
    name: 'Alex Bausch',
    position: 'Adviser',
    bio: 'Is an entrepreneur with broad experience in all aspects of international business development and the creation of global technology companies. He strongly believes in partner ecosystems which aim to inspire and spawn new innovations. His specialties include: SaaS services, mobile identity security, the IoT, enterprise managed mobility, decentralised ledger technology, marketing, and product development.',
    imgSrc: `${imgPath}/alex_bausch.png`
  },
  {
    name: 'Nick Ayton',
    position: 'Adviser',
    bio: 'Is a writer, speaker and educator of all things Blockchain and Cryptocurrency. He is a Fintech 100 Influencer and Number 21 Rise Blockchain Top 100. He has had eight startups and held many senior roles in major IT and tech companies. He now chairs various Blockchain events and advises a range of clients on Blockchain technology, bitcoin and Ethereum. One of his latest projects is to raise funds using cryptoeconomics and create a new film finance model to make a mini- series for TV about the Bitcoin Revolution, an asset backed Token, and a new Media and Film Production business on Ethereum.',
    imgSrc: `${imgPath}/nick_ayton.png`
  },
  {
    name: 'Ron Morris',
    position: 'Adviser',
    bio: 'Has been designing and delivering educational programs in multiple countries for over a decade. After several years working for Groupe INSEEC, France’s largest higher education group, he went on to direct their London campus, bringing in top-tier thought leaders, practitioners, and companies to contribute to programs and events. He has now opened a new campus for Groupe INSEEC in San Francisco, delivering immersive, challenge-based programs focused on innovation and entrepreneurship, bringing together a wide range of startups, accelerators, institutes, and thought leaders.',
    imgSrc: `${imgPath}/ron_morris.png`
  },
  {
    name: 'Tim Campbell',
    position: 'Adviser',
    bio: 'In previous roles Tim has been a key government advisor on Diversity, Small Business Social Enterprise and Entrepreneurship. Tim was also Boris Johnson\'s Training and Enterprise ambassador for the City of London whilst Mr Johnson was Mayor of London.<br />In February 2012 Tim was awarded the MBE for his efforts supporting enterprise and he currently sits on the City of London\'s Education Board. Tim is a keen runner and martial arts enthusiast and is happily married with two children. ',
    imgSrc: `${imgPath}/tim_campbell.png`
  },
  {
    name: 'Michael Terpin',
    position: 'Adviser',
    bio: 'Michael Terpin co-founded BitAngels (www.bitangels.co), the world\'s first angel network for digital currency startups, in May 2013, and now serves as its chairman. The distributed angel network currently has more than 600 members, and it has made more than 25 investments in bitcoin and cryptocurrency companies with two exits and several follow-on rounds. Terpin is also co-founder and managing partner of bCommerce Labs (www.bcommercelabs.com), the first technology incubator fund focused on e-commerce companies for bitcoin and the blockchain, and a partner at Flight VC.',
    imgSrc: `${imgPath}/michael_terpin.png`
  },

  {
    name: 'Chami Akmeemana',
    position: 'Adviser',
    imgSrc: `${imgPath}/chami_akmeemana.png`
  },

  {
    name: 'Paolo Tasca',
    position: 'Adviser',
    bio: 'Paolo Tasca is a FinTech economist specialising in P2P Financial System. An advisor for different international organisations including the EU Parliament on blockchain technologies, Paolo recently joined the University College London as Director of the Centre for Blockchain Technologies (UCL CBT).  Prior to that, he has been a senior research economist at Deutsche Bundesbank working on digital currencies and P2P lending. Paolo is the co-author of the bestseller "FINTECH Book" and the co-editor of the book "Banking Beyond Banks and Money.',
    imgSrc: `${imgPath}/paolo_tasca.png`
  },
]

const team = [
  {
    name: 'Alex Fork',
    position: 'Founder, CEO',
    bio: 'Humaniq founder and Fintech entrepreneur Alex is one of the most important members of the international Blockchain community, who has worked with the UN to lead the deployment of Blockchain technology to improve the efficiency of UN resources and remittances. He has also spearheaded the harnessing of blockchains in Russia, organising a conference for 500 participants on the Ethereum Blockchain; authoring Bitcoin. More than Just Money; and founding the Fintech accelerator for startups in Russia, Future Fintech. He started Humaniq to help lift the global banked out of poverty.',
    imgSrc: `${imgPath}/alex_fork.png`
  },
  {
    name: 'Javed Khattak',
    position: 'CFO',
    bio: 'Javed has a background as an actuary and of finance, consulting and startups. He loves technology, especially gadgets, AI and virtual reality, and believes in Blockchain for Good. He is working with Humaniq to bring greater opportunities and fairness to the world.',
    imgSrc: `${imgPath}/javed_khattak.png`
  },
  {
    name: 'Hazem Danny Al-Nakib',
    position: 'Vice President',
    bio: '',
    imgSrc: `${imgPath}/hazem_danny.jpg`
  },
  {
    name: 'Anton Mozgovoy',
    position: 'Team Lead',
    bio: 'Anton was motivated to work with Humaniq to use his experience in both computer science and finance to help to bring happiness for all across the world. He is passionate about freedriving and wakeboarding, and, of course, staying late to finish work.',
    imgSrc: `${imgPath}/anton_mozgovoy.png`
  },
  {
    name: 'Peyman Irani',
    position: 'SMM, CSS',
    bio: 'Peyman’s background is in sales and marketing, entrepreneurship, and social media and he is passionate about his family, innovation and humanitarian capitalism. Fairness means a lot to him and he believes we can do something great for humanity at Humaniq.',
    imgSrc: `${imgPath}/peyman_irani.png`
  },
  {
    name: 'Kirill Goryunov',
    position: 'CPO',
    bio: 'Bringing experience of management and economics, Serafima’s passions include art, music and Russian literature and the crypto-economy. She cannot stand inequality and is happy to have the opportunity to tackle it with Humaniq.',
    imgSrc: `${imgPath}/kirill_goryunov.jpg`
  },
  {
    name: 'Kherel Kechil',
    position: 'Lead Frontend Developer',
    bio: 'Kherel is a digital nomad. He joined Humaniq to experience and participate in the financial evolution, and observe changes to the better in the country where he currently resides - China.',
    imgSrc: `${imgPath}/kherel_kechil.png`
  },
  {
    name: 'Serafima Semkina',
    position: 'CAO',
    bio: 'Bringing experience of management and economics, Serafima’s passions include art, music and Russian literature and the crypto-economy. She cannot stand inequality and is happy to have the opportunity to tackle it with Humaniq.',
    imgSrc: `${imgPath}/serafima_semkina.png`
  },
  {
    name: 'Harry Bright',
    position: 'CBDO',
    bio: 'Bringing experience of management and economics, Serafima’s passions include art, music and Russian literature and the crypto-economy. She cannot stand inequality and is happy to have the opportunity to tackle it with Humaniq.',
    imgSrc: `${imgPath}/harry_bright.jpg`
  },
  // {
  //   name: 'Pavel Kiselyov',
  //   position: 'Lead Backend Developer',
  //   bio: '',
  //   imgSrc: `${imgPath}/pavel_kiselyov.jpg`
  // },
  {
    name: 'Georgii Oleinikov',
    position: 'Developer',
    bio: 'Bringing experience of mathematics and computer science, Georgii loves things that have an impact and people that make these things happen. He believes there is big room for improvement in the financial sector, with many not served.',
    imgSrc: `${imgPath}/georgii_oleinikov.png`
  },
  {
    name: 'Segrey Blinov',
    position: 'SMM, CSS',
    bio: 'Bringing experience of social media and customer service support, Segrey is passionate about Blockchain technology and his family.',
    imgSrc: `${imgPath}/segrey_blinov.png`
  },
  {
    name: 'Danny Kass',
    position: 'SMM, CSS',
    bio: 'Danny’s background is in social media, B2B sales and customer service support. He loves cryptoeconomy and technology and at Humaniq is motivated to disrupt the financial industry with an ecosystem for entrepreneurs to make changes from the bottom up.',
    imgSrc: `${imgPath}/danny_kass.png`
  },
  {
    name: 'Andriy Schechenko',
    position: 'Forum Administrator',
    bio: 'Andriy has experience in computer science, security research, online community building and entrepreneurship and is passionate about both improving the world and space exploration. At Humaniq he wants to contribute to something good for humanity and boost financial independence.',
    imgSrc: `${imgPath}/andriy_schechenko.png`
  },
  {
    name: 'Lee Baker',
    position: 'Writer',
    bio: 'Lee has a background in both communications and community organising and loves story-telling to inspire positive action and to connect with others to change things for the better. He wants to unleash the power of the collaborative economy and help everyone to put their destinies into their own hands.',
    imgSrc: `${imgPath}/lee_baker.png`
  },
  {
    name: 'Olga Derbio',
    position: 'Graphic Designer',
    bio: 'Olga has a background in architecture, interior design and graphic design, and is passionate about inspiring others, building sites, spontaneity, and the universe. She is at Humaniq so she can be creative for social good - and to become a crypto geek!',
    imgSrc: `${imgPath}/olga_derbio.png`
  },
]

const people = [...team, ...advisers]


const partnersImgPath = `/img/design-v2/sections/team/partners`

const partnersList = [
  {
    name: 'bitaps',
    img: `${partnersImgPath}/bitaps_2x.jpg`
  },
  {
    name: 'blockchainage',
    img: `${partnersImgPath}/blockchainage_2x.jpg`
  },
  {
    name: 'blockchaincommunity',
    img: `${partnersImgPath}/blockchaincommunity_2x.jpg`
  },
  {
    name: 'deepknowledgeventures',
    img: `${partnersImgPath}/deepknowledgeventures_2x.jpg`
  },
  {
    name: 'deloitte',
    img: `${partnersImgPath}/deloitte_2x.jpg`
  },
  {
    name: 'futurefintech',
    img: `${partnersImgPath}/futurefintech_2x.jpg`
  },
  {
    name: 'gemz',
    img: `${partnersImgPath}/gemz2.png`
  },
  {
    name: 'hedgethink',
    img: `${partnersImgPath}/hedgethink_2x.jpg`
  },
  {
    name: 'intelligenthq',
    img: `${partnersImgPath}/intelligenthq_2x.jpg`
  },
  {
    name: 'L39',
    img: `${partnersImgPath}/l39_2x.jpg`
  },
  {
    name: 'ntechlab',
    img: `${partnersImgPath}/ntechlab_2x.jpg`
  },
  {
    name: 'openbusinesscouncil',
    img: `${partnersImgPath}/openbusinesscouncil_2x.jpg`
  },
  {
    name: 'richtopia',
    img: `${partnersImgPath}/richtopia_2x.jpg`
  },
  {
    name: 'theinvaders',
    img: `${partnersImgPath}/theinvaders_2x.jpg`
  },
  {
    name: 'thinkrise',
    img: `${partnersImgPath}/thinkrise_2x.jpg`
  },
  {
    name: 'tradersdna',
    img: `${partnersImgPath}/tradersdna_2x.jpg`
  },
  {
    name: 'vexor',
    img: `${partnersImgPath}/vexor_2x.jpg`
  }
]