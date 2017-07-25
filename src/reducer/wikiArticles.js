import {REQUEST, WIKI, START, SUCCESS, FAIL} from 'constants'

const initLevel0 = {
  level0Title: '',
  ids:[],
  entities: {}
}

const initWikiArticles = {
  loading: false,
  loaded: false,
  'technical-mecca': {...initLevel0 },
  'about-humaniq': {...initLevel0 },
  descriptions:[
    {
      level0:"about-humaniq",
      level1:"root",
      description: "Humaniq is about people as much as we are about technology. So who are we, who are our community members, and how can you become part of our story? Here we share what motivates us, the positive change we want to bring about, and the ways in which you can become involved yourself"
    },
    {
      level0:"about-humaniq",
      level1:"Getting Started",
      description: "What drives us at Humaniq, and how is our app, and our HMQ coin, different to the mobile wallets and cryptocurrency we've seen in the past? Find out more about our mission to harness the Blockchain for good and get your questions about our mission to bring financial services to the global unbanked answered here."
    },
    {
      level0:"about-humaniq",
      level1:"Community",
      description: "Whether it is our users in the Global South, our HMQ coin holders and investors, or our partners developing new financial services for an unserved market, our community makes Humaniq. Find out the many ways you can get involved in our community and help us achieve our mission to bring the global unbanked into the 21st Century economy. "
    },
    {
      level0:"about-humaniq",
      level1:"Contributing",
      description: "As a user of the Humaniq App, or as a Fintech developer and believer in our project, how can you contribute? We set out the ways you can share your thoughts and ideas with us, participate in our community, contribute as an investor and work with us as a developer using our platform and HMQ coin here."
    },
    {
      level0:"technical-mecca",
      level1:"root",
      description: "Humaniq is working to help those shut out of the 21st Century and to support entrepreneurs to offer much-needed financial services to the global unbanked. What we do is made possible by technology allowing a massive untapped market to be served. Read more about the technology behind the Humaniq App and the HMQ coin cryptocurrency. "
    },
    {
      level0:"technical-mecca",
      level1:"Crypto Basics",
      description: "How can Humaniq liberate people from a reliance on the old,centralised banks, and how can we help make a more collaborative, peer-to-peer economy happen? How can we maintain a record of all transactions without banks, and offer financial services everywhere? Whether you want to know about the Blockchain or smart contracts, decentralised apps or gas, here we share the technical underpinnings of the Humaniq app and the HMQ cryptocurrency."
    }
  ]
}

export default (wikiArticles = initWikiArticles, {type, data}) => {

  switch (type) {
    case REQUEST + WIKI + START:
      return {...wikiArticles, loading: true}
    case REQUEST + WIKI + SUCCESS:
      return {...wikiArticles, loading: false, loaded: true, ...data}
    case REQUEST + WIKI + FAIL:
      return {...wikiArticles, loading: false}
  }
  return wikiArticles;
};