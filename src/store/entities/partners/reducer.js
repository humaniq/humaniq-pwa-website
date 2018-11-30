import {SUCCESS, FETCH, PARTNERS} from 'store/constants'
import {ENDPOINT_PARTNERS} from 'constants/api'

const initPartners = {
  entities: [],
  loaded: false,
  data: {
    partners: [
      {
        title: "Bitaps",
        type: "Technical Partners",
        description: "Bitaps is a platform based on full Bitcoin node with blockchain network events. Bitaps.com is a Bitcoin Block Explorer (Browser).",
        link: "https://bitaps.com/",
        logoLink: "/logos/bitaps.jpg",
        logoLink2x: "/logos/bitaps_2x.jpg"
      }, {
        title: "Blockchain Age",
        type: "Media Partners",
        description: "The Global Leader in Blockchain Research and Consultancy.",
        link: "https://blockchainage.com/",
        logoLink: "/logos/blockchainage.jpg",
        logoLink2x: "/logos/blockchainage_2x.jpg"
      }, {
        title: "Blockchain Community",
        type: "Business Partners",
        description: "Blockchain.community is a voluntary borderless community of entrepreneurs, services, experts and blockchain enthusiasts.",
        link: "http://blockchain.community/",
        logoLink: "/logos/blockchaincommunity.jpg",
        logoLink2x: "/logos/blockchaincommunity_2x.jpg"
      }, {
        title: "Deep Knowledge Ventures",
        type: "Business Partners",
        description: "Deep Knowledge Ventures is a venture capital firm based in Hong Kong with an office in London. The fund primarily invests in healthcare and artificial intelligence.",
        link: "http://www.deepknowledgeventures.com/",
        logoLink: "/logos/deepknowledgeventures.jpg",
        logoLink2x: "/logos/deepknowledgeventures_2x.jpg"
      }, {
        title: "Deloitte",
        type: "Business Partners",
        description: "Deloitte provides industry-leading audit, consulting, tax, and advisory services to many of the world's most admired brands, including 80 percent of the Fortune 500.",
        link: "https://www2.deloitte.com/us/en.htm",
        logoLink: "/logos/deloitte.jpg",
        logoLink2x: "/logos/deloitte_2x.jpg"
      }, {
        title: "Future Fintech",
        type: "Business Partners",
        description: "Future Fintech - the international community of experts in the area of financial and blokchain technology projects as well as the selection of the program and the acceleration fintech startups from Russia, CIS countries and Europe.",
        link: "http://www.futurefintech.org/",
        logoLink: "/logos/futurefintech.jpg",
        logoLink2x: "/logos/futurefintech_2x.jpg"
      }, {
        title: "Hedge Think",
        type: "Media Partners",
        description: "Digital meeting place for fund managers and investors.",
        link: "https://www.hedgethink.com/",
        logoLink: "/logos/hedgethink.jpg",
        logoLink2x: "/logos/hedgethink_2x.jpg"
      }, {
        title: "Intelligent HQ",
        type: "Media Partners",
        description: "The definitive authority for social businesses a digital network for growth, education, change and innovation.",
        link: "https://www.intelligenthq.com/",
        logoLink: "/logos/intelligenthq.jpg",
        logoLink2x: "/logos/intelligenthq_2x.jpg"
      }, {
        title: "Level39",
        type: "Business Partners",
        description: "Level39 is the world's most connected community for finance, cybersecurity, retail and smart-city technology businesses.",
        link: "http://www.level39.co/",
        logoLink: "/logos/l39.jpg",
        logoLink2x: "/logos/l39_2x.jpg"
      }, {
        title: "NTechLab",
        type: "Technical Partners",
        description: "NTechLab develops and implements artificial intelligence algorithms. We are a team of experts in machine and deep learning.",
        link: "http://ntechlab.com/",
        logoLink: "/logos/ntechlab.jpg",
        logoLink2x: "/logos/ntechlab_2x.jpg"
      }, {
        title: "Open Business Council",
        type: "Media Partners",
        description: "Open Business Council - SME Startups resources, Trade Finance, Invoice Finance, Asset Finance, Business Intelligence, software.",
        link: "https://www.openbusinesscouncil.org/",
        logoLink: "/logos/openbusinesscouncil.jpg",
        logoLink2x: "/logos/openbusinesscouncil_2x.jpg"
      }, {
        title: "Richtopia",
        type: "Media Partners",
        description: "A complete media brand covering effective leadership, emerging technologies, global economics, inspirational people, smart investing & strategic marketing.",
        link: "https://richtopia.com/",
        logoLink: "/logos/richtopia.jpg",
        logoLink2x: "/logos/richtopia_2x.jpg"
      }, {
        title: "The Invaders",
        type: "Technical Partners",
        description: "Leading expert group in Kotlin Android development",
        link: "http://theinvaders.ru",
        logoLink: "/logos/theinvaders.jpg",
        logoLink2x: "/logos/theinvaders_2x.jpg"
      }, {
        title: "Think Rise by Barclays",
        type: "Business Partners",
        description: "Rise London, the home of fintech and Barclays Accelerator powered by Techstars, is the place where great minds co-create the future of financial services.",
        link: "https://thinkrise.com/",
        logoLink: "/logos/thinkrise.jpg",
        logoLink2x: "/logos/thinkrise_2x.jpg"
      }, {
        title: "TradersDNA",
        type: "Media Partners",
        description: "TradersDNA offers premiere resources for trading and investing education and digital resources for personal finance.",
        link: "https://www.tradersdna.com/",
        logoLink: "/logos/tradersdna.jpg",
        logoLink2x: "/logos/tradersdna_2x.jpg"
      }, {
        title: "Vexor",
        type: "Technical Partners",
        description: "Vexor is a distributed cloud web-service for building and testing software, a continuous integration tool.",
        link: "https://vexor.io/",
        logoLink: "/logos/vexor.jpg",
        logoLink2x: "/logos/vexor_2x.jpg"
      }
    ]
  }
}

function addUrl(arr){
  return arr.map( ({logoLink2x, ...other}) => {
    return({
      ...other,
      logoLink2x: ENDPOINT_PARTNERS + logoLink2x
    })
  })
}

export default ( partners = initPartners, {type, data}) => {
  return {...partners, loaded: true, entities: addUrl(initPartners.data.partners)}

  /*switch (type) {
    case FETCH + PARTNERS + SUCCESS:
      return {...partners, loaded: true, entities: addUrl(data.partners)}
  }

  return partners;*/
};