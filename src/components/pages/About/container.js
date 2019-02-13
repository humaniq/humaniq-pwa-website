import {connect} from 'react-redux';
import Page from './page'

function mapStateToProps() {

  return {advisers, team, timeLineData};
}

export default connect(mapStateToProps)(Page);


const imgPath = 'img/team_g'
// const founders = [
//   {
//     name: 'Alex Fork',
//     position: 'Head of Humaniq',
//     bio: 'Humaniq founder and Fintech entrepreneur Alex is one of the most important members of the international Blockchain community, who has worked with the UN to lead the deployment of Blockchain technology to improve the efficiency of UN resources and remittances. He has also spearheaded the harnessing of blockchains in Russia, organising a conference for 500 participants on the Ethereum Blockchain; authoring Bitcoin. More than Just Money; and founding the Fintech accelerator for startups in Russia, Future Fintech. He started Humaniq to help lift the global banked out of poverty.',
//     imgSrc: `${imgPath}/alex_fork.png`
//   },
//   {
//     name: 'Dinis Guarda',
//     position: 'CEO and Co-Founder of Humaniq',
//     bio: 'Digital age influencer Dinis is the founder of digital communications consultancy Ztudium and manager of websites <a href="https://intelligenthq.com" target="_blank">intelligenthq.com</a>, <a href="https://openbusinesscouncil.org" target="_blank">openbusinesscouncil.org</a>, <a href="https://tradersdna.com" target="_blank">tradersdna.com</a>, and <a href="https://hedgethink.com" target="_blank">hedgethink.com</a>. Dinis also co-founded BlockchainAge, a blockchain research and tech influencer, platform, book and film; led the digital strategy for invstr.com; authored books including The Next Tsunami: Blockchain plus AI and IOT and led a digital master course in London for Group INSEEC. He has been ranked as in the top 100 Blockchain and Fintech influencers.',
//     imgSrc: `${imgPath}/dinis_guarda.jpg`
//   },
//   {
//     name: 'Dmitry Kaminskiy',
//     position: 'Executive Chairman and Co-Founder',
//     bio: 'An innovative entrepreneur and investor active in Biotech, Fintech, Blockchain and artificial intelligence, Dmitry is co-founder of the Deep Knowledge Ventures investment fund, focused on investments in AI and Deeptech. He adheres to the principle of impact investment in all his business activities, believing that business should make a social impact, and he supports the deployment of Blockchain for Good, which led to his decision to support Humaniq from its inception.',
//     imgSrc: `${imgPath}/dmitry_kaminskiy.jpg`
//   },
// ]

const advisers = [
  // {
  //   name: 'Dinis Guarda',
  //   position: 'Adviser',
  //   bio:
  //     'Digital age influencer Dinis is the founder of digital communications consultancy Ztudium and manager of websites <a href="https://intelligenthq.com" target="_blank">intelligenthq.com</a>, <a href="https://openbusinesscouncil.org" target="_blank">openbusinesscouncil.org</a>, <a href="https://tradersdna.com" target="_blank">tradersdna.com</a>, and <a href="https://hedgethink.com" target="_blank">hedgethink.com</a>. Dinis also co-founded BlockchainAge, a blockchain research and tech influencer, platform, book and film; led the digital strategy for invstr.com; authored books including The Next Tsunami: Blockchain plus AI and IOT and led a digital master course in London for Group INSEEC. He has been ranked as in the top 100 Blockchain and Fintech influencers.',
  //   imgSrc: `${imgPath}/dinis_guarda.png`,
  // },
  {
    name: 'David Applefield',
    position: 'Adviser',
    bio:
      'Is an American writer and media specialist living in Paris. He has as spent his career developing creative and innovative solutions for business leaders, heads of state, ministries, NGOs, and other not-for- profit foundations. He is the Financial Times representative for Africa, the Middle East and emerging markets.',
    imgSrc: `${imgPath}/david_applefield.png`,
  },
  // {
  //   name: 'Iggy Bassi',
  //   position: 'Adviser',
  //   bio:
  //     'Is the co-founder and serves as a Director of GADCO, a venture focused on sustainable agriculture and livelihood development in West Africa with LATAM technologies. He has a long track record in building companies in the technology, finance, and impact markets – in both emerged and emerging markets. Over the past 20 years he has advised many global companies (inc. Fortune 500), sovereigns, and entrepreneurs on solving problems in competitiveness, sustainability, scenario planning, and structuring complex transactions. He works at the intersection of technology, sustainability, food security, global security, and innovative thinking around the collaborative economy.',
  //   imgSrc: `${imgPath}/iggy_bassi.png`,
  // },
  {
    name: 'Richard Kastelein',
    position: 'Adviser',
    bio:
    'Founder and publisher of industry publication Blockchain News (EST 2015) at www.the-blockchain.com, a partner at ICO services collective Token.Agency ($500m+ and 90+ ICOs), director of education company Blockchain Partners (Oracle Partner) and ICO event organiser at leading industry event CryptoFinancing (Europe\'s first ICO event now branded Tokenomicon) - Vancouver native Richard Kastelein is an award-winning publisher, innovation executive and entrepreneur. He sits on the advisory boards of some two dozen Blockchain startups and has written over 2000 articles on Blockchain technology and startups at Blockchain News and has also published pioneering articles on ICOs in Harvard Business Review and Venturebeat.',
    imgSrc: `${imgPath}/richard_kastelein.jpg`,
  },
  {
    name: 'Matt McKibbin',
    position: 'Adviser',
    bio:
      'Is a business development guru and a decentralization evangelist. He became interested in Bitcoin and the blockchain technology in 2012. Technologically savvy, he is an extroverted connector driven by a desire to see transformative and decentralized technologies positively affect the 7 billion people on the planet. He is based in the Washington DC metro area.',
    imgSrc: `${imgPath}/matt_mckibbin.png`,
  },
  {
    name: 'Alex Bausch',
    position: 'Adviser',
    bio:
      'Is an entrepreneur with broad experience in all aspects of international business development and the creation of global technology companies. He strongly believes in partner ecosystems which aim to inspire and spawn new innovations. His specialties include: SaaS services, mobile identity security, the IoT, enterprise managed mobility, decentralised ledger technology, marketing, and product development.',
    imgSrc: `${imgPath}/alex_bausch.png`,
  },
  {
    name: 'Nick Ayton',
    position: 'Adviser',
    bio:
      'Is a writer, speaker and educator of all things Blockchain and Cryptocurrency. He is a Fintech 100 Influencer and Number 21 Rise Blockchain Top 100. He has had eight startups and held many senior roles in major IT and tech companies. He now chairs various Blockchain events and advises a range of clients on Blockchain technology, bitcoin and Ethereum. One of his latest projects is to raise funds using cryptoeconomics and create a new film finance model to make a mini- series for TV about the Bitcoin Revolution, an asset backed Token, and a new Media and Film Production business on Ethereum.',
    imgSrc: `${imgPath}/nick_ayton.png`,
  },
  // {
  //   name: 'Ron Morris',
  //   position: 'Adviser',
  //   bio:
  //     'Has been designing and delivering educational programs in multiple countries for over a decade. After several years working for Groupe INSEEC, France’s largest higher education group, he went on to direct their London campus, bringing in top-tier thought leaders, practitioners, and companies to contribute to programs and events. He has now opened a new campus for Groupe INSEEC in San Francisco, delivering immersive, challenge-based programs focused on innovation and entrepreneurship, bringing together a wide range of startups, accelerators, institutes, and thought leaders.',
  //   imgSrc: `${imgPath}/ron_morris.png`,
  // },
  // {
  //   name: 'Tim Campbell',
  //   position: 'Adviser',
  //   bio: "In previous roles Tim has been a key government advisor on Diversity, Small Business Social Enterprise and Entrepreneurship. Tim was also Boris Johnson's Training and Enterprise ambassador for the City of London whilst Mr Johnson was Mayor of London.<br />In February 2012 Tim was awarded the MBE for his efforts supporting enterprise and he currently sits on the City of London's Education Board. Tim is a keen runner and martial arts enthusiast and is happily married with two children. ",
  //   imgSrc: `${imgPath}/tim_campbell.png`,
  // },
  {
    name: 'Michael Terpin',
    position: 'Adviser',
    bio:
      "Michael Terpin co-founded BitAngels (www.bitangels.co), the world's first angel network for digital currency startups, in May 2013, and now serves as its chairman. The distributed angel network currently has more than 600 members, and it has made more than 25 investments in bitcoin and cryptocurrency companies with two exits and several follow-on rounds. Terpin is also co-founder and managing partner of bCommerce Labs (www.bcommercelabs.com), the first technology incubator fund focused on e-commerce companies for bitcoin and the blockchain, and a partner at Flight VC.",
    imgSrc: `${imgPath}/michael_terpin.png`,
  },
  {
    name: 'Dmitry Kaminskiy',
    position: 'Adviser',
    bio:
      'An innovative entrepreneur and investor active in Biotech, Fintech, Blockchain and artificial intelligence, Dmitry is co-founder of the Deep Knowledge Ventures investment fund, focused on investments in AI and Deeptech. He adheres to the principle of impact investment in all his business activities, believing that business should make a social impact, and he supports the deployment of Blockchain for Good, which led to his decision to support Humaniq from its inception.',
    imgSrc: `${imgPath}/dmitry_kaminskiy.png`,
  },
  // {
  //   name: 'Chami Akmeemana',
  //   position: 'Adviser',
  //   imgSrc: `${imgPath}/chami_akmeemana.png`,
  // },
  //{
  //  name: 'Paolo Tasca',
  //  position: 'Adviser',
  //  bio: 'Paolo Tasca is a FinTech economist specialising in P2P Financial System. An advisor for different international organisations including the EU Parliament on blockchain technologies, Paolo recently joined the University College London as Director of the Centre for Blockchain Technologies (UCL CBT).  Prior to that, he has been a senior research economist at Deutsche Bundesbank working on digital currencies and P2P lending. Paolo is the co-author of the bestseller "FINTECH Book" and the co-editor of the book "Banking Beyond Banks and Money.',
  //  imgSrc: `${imgPath}/paolo_tasca.png`,
  //},
  {
    name: 'Margaretta Colangelo',
    position: 'Adviser',
    bio:
    'In tech companies, thinking is the primary activity and the core process used to create value. One of the challenges when thinking about technology is keeping up with constant innovation and envisioning what will evolve next. To stay abreast of emerging technologies, I\'ve built this think tank of investors, entrepreneurs, researchers, and engineers around the world who have progressive ideas. Like a natural ecosystem, our ecosystem consists of interlinked resources that complement each other. As the community expands, it\'s value increases exponentially for everyone in it. These are some of the people with whom I collaborate regularly.',
    imgSrc: `${imgPath}/margaretta_colangelo.jpg`,
  },
]

const team = [
  {
    name: 'Alex Fork',
    position: 'Founder, CEO',
    bio: 'Humaniq founder and Fintech entrepreneur Alex is one of the most important members of the international Blockchain community, who has worked with the UN to lead the deployment of Blockchain technology to improve the efficiency of UN resources and remittances. He has also spearheaded the harnessing of blockchains in Russia, organising a conference for 500 participants on the Ethereum Blockchain; authoring Bitcoin. More than Just Money; and founding the Fintech accelerator for startups in Russia, Future Fintech. He started Humaniq to help lift the global banked out of poverty.',
    imgSrc: `${imgPath}/alex_fork.png`,
  },
  //{
  //  name: 'Javed Khattak',
  //  position: 'CFO',
  //  bio: 'Javed has a background as an actuary and of finance, consulting and startups. He loves technology, especially gadgets, AI and virtual reality, and believes in Blockchain for Good. He is working with Humaniq to bring greater opportunities and fairness to the world.',
  //  imgSrc: `${imgPath}/javed_khattak.png`,
  //},
  //{
  //  name: 'Hazem Danny Al-Nakib',
  //  position: 'CIO',
  //  bio: '',
  //  imgSrc: `${imgPath}/hazem_danny.jpg`,
  //},
  {
    name: 'Anton Mozgovoy',
    position: 'Team Lead',
    bio: 'Anton was motivated to work with Humaniq to use his experience in both computer science and finance to help to bring happiness for all across the world. He is passionate about freedriving and wakeboarding, and, of course, staying late to finish work.',
    imgSrc: `${imgPath}/anton_mozgovoy.png`
  },
  // {
  //   name: 'Peyman Irani',
  //   position: 'SMM, CSS',
  //   bio: 'Peyman’s background is in sales and marketing, entrepreneurship, and social media and he is passionate about his family, innovation and humanitarian capitalism. Fairness means a lot to him and he believes we can do something great for humanity at Humaniq.',
  //   imgSrc: `${imgPath}/peyman_irani.png`,
  // },
  {
    name: 'Kirill Goryunov',
    position: 'CPO',
    bio: '',
    imgSrc: `${imgPath}/kirill_goryunov.jpg`,
  },
  //{
  //  name: 'Kherel Kechil',
  //  position: 'Lead Frontend Developer',
  //  bio: 'Kherel is a digital nomad. He joined Humaniq to experience and participate in the financial evolution, and observe changes to the better in the country where he currently resides - China.',
  //  imgSrc: `${imgPath}/kherel_kechil.png`,
  //},
  // {
  //   name: 'Serafima Semkina',
  //   position: 'CAO',
  //   bio: 'Bringing experience of management and economics, Serafima’s passions include art, music and Russian literature and the crypto-economy. She cannot stand inequality and is happy to have the opportunity to tackle it with Humaniq.',
  //   imgSrc: `${imgPath}/serafima_semkina.png`
  // },
  //{
  //  name: 'Harry Bright',
  //  position: 'CBDO',
  //  bio: 'Bringing experience of management and economics, Serafima’s passions include art, music and Russian literature and the crypto-economy. She cannot stand inequality and is happy to have the opportunity to tackle it with Humaniq.',
  //  imgSrc: `${imgPath}/harry_bright.jpg`,
  //},
  //{
  //  name: 'Andrey Gidaspov',
  //  position: 'Chief Global Development Officer',
  //  bio: '',
  //  imgSrc: `${imgPath}/andrey_gidaspov.jpg`,
  //},
  // {
  //   name: 'Pavel Kiselyov',
  //   position: 'Lead Backend Developer',
  //   bio: '',
  //   imgSrc: `${imgPath}/pavel_kiselyov.jpg`
  // },
  // {
  //   name: 'Georgii Oleinikov',
  //   position: 'Developer',
  //   bio: 'Bringing experience of mathematics and computer science, Georgii loves things that have an impact and people that make these things happen. He believes there is big room for improvement in the financial sector, with many not served.',
  //   imgSrc: `${imgPath}/georgii_oleinikov.png`
  // },
  {
    name: 'Segrey Blinov',
    position: 'SMM, CSS',
    bio: 'Bringing experience of social media and customer service support, Segrey is passionate about Blockchain technology and his family.',
    imgSrc: `${imgPath}/segrey_blinov.png`,
  },
  {
    name: 'Danny Kass',
    position: 'SMM, CSS',
    bio: 'Danny’s background is in social media, B2B sales and customer service support. He loves cryptoeconomy and technology and at Humaniq is motivated to disrupt the financial industry with an ecosystem for entrepreneurs to make changes from the bottom up.',
    imgSrc: `${imgPath}/danny_kass.png`,
  },
  //{
  //  name: 'Andrey Shevchenko',
  //  position: 'SMM, CSS',
  //  bio: 'Andriy has experience in computer science, security research, online community building and entrepreneurship and is passionate about both improving the world and space exploration. At Humaniq he wants to contribute to something good for humanity and boost financial independence.',
  //  imgSrc: `${imgPath}/andriy_schechenko.png`,
  //},
  //{
  //  name: 'Lee Baker',
  //  position: 'Writer',
  //  bio: 'Lee has a background in both communications and community organising and loves story-telling to inspire positive action and to connect with others to change things for the better. He wants to unleash the power of the collaborative economy and help everyone to put their destinies into their own hands.',
  //  imgSrc: `${imgPath}/lee_baker.png`,
  //},
  {
    name: 'Olga Derbio',
    position: 'Graphic Designer',
    bio: 'Olga has a background in architecture, interior design and graphic design, and is passionate about inspiring others, building sites, spontaneity, and the universe. She is at Humaniq so she can be creative for social good - and to become a crypto geek!',
    imgSrc: `${imgPath}/olga_derbio.png`,
  },
]


const timeLineData = [
  {
    year: '2016',
    months: [
      {
        name: 'April',
        events: [
          'Inception of the Humaniq idea by Alex Fork.',
        ]
      },
      {
        name: 'November',
        events: [
          'Humaniq Whitebook is written and the original project team is formed.',
        ]
      },
      {
        name: 'December',
        events: [
          'Humaniq.co website is launched and pre-ICO is announced',
        ]
      },
    ],
  },
  {
    year: '2017',
    months: [
      {
        name: 'February',
        events: [
          'Smart contracts are being developed, due diligence and marketing campaign take place.',
          'Humaniq team meets with project partners in India. Alex Fork conducts the first performance tests of the project in unbanked regions of India.',
          'Humaniq announces first online hackathon',
          'Pre-ICO (crowdsale) is launched',
        ]
      },
      {
        name: 'March',
        events: [
          'Alpha version of the app is available for testing on IOS and Android.',
        ]
      },
      {
        name: 'April',
        events: [
          'Humaniq collects $1.5 mln in the first hour of their ICO.',
        ]
      },
      {
        name: 'May',
        events: [
          'App with new enchanced biometrics is being released.',
        ]
      },
      {
        name: 'Now',
        events: [
          'Humaniq is 43 people now, working from 14 countries.',
        ]
      },
    ],
  },
]