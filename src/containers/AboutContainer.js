import {connect} from 'react-redux';
import SE_About from 'SE_About'

function mapStateToProps() {

  return {founders, advisers};
}

export default connect(mapStateToProps)(SE_About);


const imgPath = 'img/team'
const founders = [
  {
    name: 'Alex Fork',
    position: 'Head of Humaniq',
    bio: 'Humaniq founder and Fintech entrepreneur Alex is one of the most important members of the international Blockchain community, who has worked with the UN to lead the deployment of Blockchain technology to improve the efficiency of UN resources and remittances. He has also spearheaded the harnessing of blockchains in Russia, organising a conference for 500 participants on the Ethereum Blockchain; authoring Bitcoin. More than Just Money; and founding the Fintech accelerator for startups in Russia, Future Fintech. He started Humaniq to help lift the global banked out of poverty.',
    imgSrc: `${imgPath}/alex_fork.jpg`
  },
  {
    name: 'Dinis Guarda',
    position: 'CEO and Co-Founder of Humaniq',
    bio: 'Digital age influencer Dinis is the founder of digital communications consultancy Ztudium and manager of websites <a href="https://intelligenthq.com" target="_blank">intelligenthq.com</a>, <a href="https://openbusinesscouncil.org" target="_blank">openbusinesscouncil.org</a>, <a href="https://tradersdna.com" target="_blank">tradersdna.com</a>, and <a href="https://hedgethink.com" target="_blank">hedgethink.com</a>. Dinis also co-founded BlockchainAge, a blockchain research and tech influencer, platform, book and film; led the digital strategy for invstr.com; authored books including The Next Tsunami: Blockchain plus AI and IOT and led a digital master course in London for Group INSEEC. He has been ranked as in the top 100 Blockchain and Fintech influencers.',
    imgSrc: `${imgPath}/dinis_guarda.jpg`
  },
  {
    name: 'Dmitry Kaminskiy',
    position: 'Executive Chairman and Co-Founder',
    bio: 'An innovative entrepreneur and investor active in Biotech, Fintech, Blockchain and artificial intelligence, Dmitry is co-founder of the Deep Knowledge Ventures investment fund, focused on investments in AI and Deeptech. He adheres to the principle of impact investment in all his business activities, believing that business should make a social impact, and he supports the deployment of Blockchain for Good, which led to his decision to support Humaniq from its inception.',
    imgSrc: `${imgPath}/dmitry_kaminskiy.jpg`
  },
]

const advisers = [
  {
    name: 'David Applefield',
    bio: 'Is an American writer and media specialist living in Paris. He has as spent his career developing creative and innovative solutions for business leaders, heads of state, ministries, NGOs, and other not-for- profit foundations. He is the Financial Times representative for Africa, the Middle East and emerging markets.',
    imgSrc: `${imgPath}/david_applefield.png`
  },
  {
    name: 'Iggy Bassi',
    bio: 'Is the co-founder and serves as a Director of GADCO, a venture focused on sustainable agriculture and livelihood development in West Africa with LATAM technologies. He has a long track record in building companies in the technology, finance, and impact markets – in both emerged and emerging markets. Over the past 20 years he has advised many global companies (inc. Fortune 500), sovereigns, and entrepreneurs on solving problems in competitiveness, sustainability, scenario planning, and structuring complex transactions. He works at the intersection of technology, sustainability, food security, global security, and innovative thinking around the collaborative economy.',
    imgSrc: `${imgPath}/iggy_bassi.jpg`
  },
  {
    name: 'Matt McKibbin',
    bio: 'Is a business development guru and a decentralization evangelist. He became interested in Bitcoin and the blockchain technology in 2012. Technologically savvy, he is an extroverted connector driven by a desire to see transformative and decentralized technologies positively affect the 7 billion people on the planet. He is based in the Washington DC metro area.',
    imgSrc: `${imgPath}/matt_mckibbin.jpg`
  },
  {
    name: 'Alex Bausch',
    bio: 'Is an entrepreneur with broad experience in all aspects of international business development and the creation of global technology companies. He strongly believes in partner ecosystems which aim to inspire and spawn new innovations. His specialties include: SaaS services, mobile identity security, the IoT, enterprise managed mobility, decentralised ledger technology, marketing, and product development.',
    imgSrc: `${imgPath}/alex_bausch.jpg`
  },
  {
    name: 'Nick Ayton',
    bio: 'Is a writer, speaker and educator of all things Blockchain and Cryptocurrency. He is a Fintech 100 Influencer and Number 21 Rise Blockchain Top 100. He has had eight startups and held many senior roles in major IT and tech companies. He now chairs various Blockchain events and advises a range of clients on Blockchain technology, bitcoin and Ethereum. One of his latest projects is to raise funds using cryptoeconomics and create a new film finance model to make a mini- series for TV about the Bitcoin Revolution, an asset backed Token, and a new Media and Film Production business on Ethereum.',
    imgSrc: `${imgPath}/nick_ayton.jpeg`
  },
  {
    name: 'Ron Morris',
    bio: 'Has been designing and delivering educational programs in multiple countries for over a decade. After several years working for Groupe INSEEC, France’s largest higher education group, he went on to direct their London campus, bringing in top-tier thought leaders, practitioners, and companies to contribute to programs and events. He has now opened a new campus for Groupe INSEEC in San Francisco, delivering immersive, challenge-based programs focused on innovation and entrepreneurship, bringing together a wide range of startups, accelerators, institutes, and thought leaders.',
    imgSrc: `${imgPath}/ron_morris.png`
  },
  {
    name: 'Tim Campbell',
    bio: 'In previous roles Tim has been a key government advisor on Diversity, Small Business Social Enterprise and Entrepreneurship. Tim was also Boris Johnson\'s Training and Enterprise ambassador for the City of London whilst Mr Johnson was Mayor of London.<br />In February 2012 Tim was awarded the MBE for his efforts supporting enterprise and he currently sits on the City of London\'s Education Board. Tim is a keen runner and martial arts enthusiast and is happily married with two children. ',
    imgSrc: `${imgPath}/tim_campbell.jpg`
  },
  {
    name: 'Michael Terpin',
    bio: 'Michael Terpin co-founded BitAngels (www.bitangels.co), the world\'s first angel network for digital currency startups, in May 2013, and now serves as its chairman. The distributed angel network currently has more than 600 members, and it has made more than 25 investments in bitcoin and cryptocurrency companies with two exits and several follow-on rounds. Terpin is also co-founder and managing partner of bCommerce Labs (www.bcommercelabs.com), the first technology incubator fund focused on e-commerce companies for bitcoin and the blockchain, and a partner at Flight VC.',
    imgSrc: `${imgPath}/michael_terpin.jpg`
  },

  {
    name: 'Chami Akmeemana',
    imgSrc: `${imgPath}/chami_akmeemana.jpg`
  },

  {
    name: 'Paolo Tasca',
    bio: 'Paolo Tasca is a FinTech economist specialising in P2P Financial System. An advisor for different international organisations including the EU Parliament on blockchain technologies, Paolo recently joined the University College London as Director of the Centre for Blockchain Technologies (UCL CBT).  Prior to that, he has been a senior research economist at Deutsche Bundesbank working on digital currencies and P2P lending. Paolo is the co-author of the bestseller "FINTECH Book" and the co-editor of the book "Banking Beyond Banks and Money.',
    imgSrc: `${imgPath}/paolo_tasca.jpeg`
  },
]