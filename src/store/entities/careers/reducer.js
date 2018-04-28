import { START, SUCCESS, FETCH, FAIL, CAREERS } from "store/constants";
import mapper from "./mapper";

const careersInit = {
  loading: false,
  loaded: false,
  entities: [
    {
      createdAt: "23/04/2018",
      edited: true,
      _id: "5addeecdc46dec3930725430",
      title: "Head of Analytics and Targeting ",
      body:
        "<h3>Duties and responsibilities:</h3>\n<p>● Procurement of native advertising</p>\n<p>● Purchase of banner advertising</p>\n<p>● CPA</p>\n<p>● Purchase of video advertising</p>\n<p>● Working on analytics and conversion optimisation</p>\n<p>● Distribution of traffic via affiliate programs</p>\n<p>● Testing / developing of creative content</p>\n<p>● Cooperation with PR, SMM and trading departments</p>\n<p>● Retargeting&nbsp;</p>\n<br/><h3>Required skills:</h3>\n<p>● Experience in working with crypto-currency projects</p>\n<p>● Experience in working with end-to-end analytics systems</p>\n<p>● Analytical mindset</p>\n<p>● Experience in working with crypto-exchange partner networks</p>\n<p>● Ability to perform tasks quickly and accurately</p>\n<p>● Ability to bypass FB and Google limitations</p>\n<p>● Punctuality and diligence</p>\n<p>● Experience in working with analytics systems other than GA (Ninjacat, Mixpanel, Thrivehive, Looker, Funnel.io, Bizible, Maroon.ai)</p>\n<p>● Spoken English, along with German, French, Korean and Chinese</p>\n<p>● Ability and willingness to relocate - preferre&nbsp;</p>\n",
      subtitle: "(Post-ICO Marketing) ",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: false,
      _id: "5ae4573bc46dec3930725432",
      title: "Head of PR ",
      body:
        "<p><strong>Duties and responsibilities:</strong></p>\n<p>● Generation of info traffic</p>\n<p>● Progressing tasks from the initial data input stage to a published article with the shortest possible turnaround</p>\n<p>● Co-operation with content producers and SMM manager</p>\n<p>● Working with analytical systems (Meltwater, Cision, MuckRack, Anewstip, Traackr, Haro, hey.press)</p>\n<p>● Online liaison with partners (exchanges, exchange points)</p>\n<br/><p><strong>Required skills:</strong></p>\n<p>● Experience in working with crypto-currency media (selection criteria - a portfolio of case studies to hand)</p>\n<p>● Availability of own database of journalist contacts</p>\n<p>● Prior experience in working with top-tier financial publications</p>\n<p>● Creativity, good imagination</p>\n<p>● Knowledge of the financial market and commercial terminology</p>\n<p>● Locating startups, finances, and crypto-currency projects within the market context</p>\n<p>● Spoken English, along with German, French, Korean and Chinese</p>\n<p>● Knowledge of the unbanked market - bonus&nbsp;</p>\n<p>● Contacts in alternative blockchain projects - bonus&nbsp;</p>\n<p>● A desire to develop and grow professionally, openness, zest&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: false,
      _id: "5ae45751c46dec3930725433",
      title: "Head of SMM & Community management",
      body:
        "<p><strong>Duties and responsibilities:</strong></p>\n<p>● Working with a community (AMA, webinars, events and competitions, other entertainment)</p>\n<p>● Maintaining the project social networks - Twitter, Facebook, Instagram, Reddit</p>\n<p>● Bitcointalk, Reddit forum support</p>\n<p>● Social networking strategy development&nbsp;</p>\n<p>● Working with the PR, analytical, traffic and trading departments</p>\n<p>● Working with Influencers</p>\n<p>● Working with bounty managers</p>\n<p>● Company image-making&nbsp;</p>\n<p>● Working with analytics systems</p>\n<p>● Post-automation</p>\n<br/><p><strong>Required skills:</strong></p>\n<p>● Experience in working with crypto-currency projects</p>\n<p>● Creativity (portfolio of creative content)</p>\n<p>● Spoken English (German, French, Korean and Chinese will be a bonus)</p>\n<p>● Knowledge of the unbanked market - bonus</p>\n<p>● Contacts in other blockchain projects - bonus</p>\n<p>● Locating startups, finances, and crypto-currency projects within the market context</p>\n<p>● Proactive, independent, strong communication skills</p>\n<p>● Ability to answer complex questions</p>\n<p>● Willingness to relocate - preferred&nbsp;&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: true,
      _id: "5ae45764c46dec3930725434",
      title: "E-mail marketing manager",
      body:
        "<p><strong>Duties and responsibilities:</strong></p>\n<p>● Project e-mail marketing strategy development (automatic, trigger, manual distribution)</p>\n<p>● Base segmentation</p>\n<p>● Analytics and optimisation of mailing lists (AB testing)</p>\n<p>● Preparation and creation of e-mail newsletters using built-in editors</p>\n<p>● Creation of manual and automated mailing lists&nbsp;</p>\n<br/><p><strong>Required skills:</strong></p>\n<p>● Experience in the fintech industry</p>\n<p>● A set of prior successful e-mail generation cases available&nbsp;</p>\n<p>● Fluent English, copywriting skills</p>\n<p>● Knowledge of HTML / CSS and experience in writing emails</p>\n<p>● Ability to select email content and understanding the basic principles of email design&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: false,
      _id: "5ae4577ec46dec3930725435",
      title: "Project Manager",
      body:
        "<p><strong>Role specifics:</strong></p>\n<p>Web token exchange, airdrop, analytics dashboard, investor" +
        " profile, trading bot development, development of smart contracts and a decentralised exchange, crowd" +
        " funding platform development.</p>\n<p><strong><br />Duties and responsibilities:</strong></p>\n<p>● TOR" +
        " drafting for the product team</p>\n<p>● Monitoring of implementation and deadlines&nbsp;</p>\n<p>● Assessment of sub-project budgeting</p>\n<p>● Development of selected projects in accordance with user requests</p>\n<p>● Suggesting new features.</p>\n<br/><p><strong>Required skills:</strong></p>\n<ul>\n<li>Ability to formalise product requirements based on the founder high-level vision&nbsp;</li>\n<li>Previous product/project manager work experience in the blockchain field&nbsp;</li>\n</ul>\n<p>● Strong cryptocurrency market knowledge and understanding of pertaining terminology</p>\n<p>● Experience in managing a team of product experts (design, frontend, backend)&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: true,
      _id: "5ae457a5c46dec3930725436",
      title: "Frontend developer",
      body:
        "<h3>Role specifics:</h3>\n<p>Development of a client application for the purchase of tokens in exchange for" +
        " cryptocurrency directly off the website, investor profiles, development of the client side of the" +
        " analytics dashboard, development of the client side of the crowdfunding portal, development of a gaming" +
        " portal.</p>\n<br/><h3>Duties and responsibilities:</h3>\n<p>● Development of web applications with a focus on" +
        " fintech</p>\n<p>○ Multitude of diagrams, graphs, progress bars</p>\n<p>○ Trading interfaces</p>\n<p>○" +
        " Mathematical calculations</p>\n<p>● Technical support for the marketing department&nbsp;</p>\n<p>○" +
        " Technical execution of AB tests</p>\n<p>○ Analytics, cross-cutting analytics</p>\n" +
        "<p>● Analytics dashboard" +
        " development&nbsp;<br/>○ Working with map APIs (geolocation)&nbsp;<br/>○&nbsp;Interaction with internal and" +
        " external API services</p>" +
        "<br/><h3>Required skills:</h3><p>● Experience in working with the React / Redux / ES6 /" +
        " Webpack / Babel / npm stack</p>\n<p>● Experience in working with Canvas / d3 / TradingView graphics libraries</p>\n<p>● Understanding of the HTTP / https / ajax / WebSocket protocol features&nbsp;</p>\n<p>● Understanding the principles of blockchain operation and knowledge of associated terminology (token, address, private key, hash)</p>\n<p>● Understanding of the basics of web application security</p>\n<p>● Knowledge of exchange terminology (order, trade, candle, volume) and principles of the market structure.</p>\n<p>● Technical background</p>\n<p>● Accuracy, precision&nbsp;<br/>● Experience in working as part of a team&nbsp;&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: false,
      _id: "5ae457c0c46dec3930725437",
      title: "Fintech backend developer",
      body:
        "<h3>Role specifics:&nbsp;</h3>\n<p>Development of the token exchange backend, development of the investor" +
        " profile backend, crowd-funding portal development, analytics dashboard" +
        " development.&nbsp;</p><br/><p><strong>Duties" +
        " and responsibilities:</strong></p>\n<p>● Interaction with the APIs of various exchanges&nbsp;</p>\n<p>●" +
        " Development" +
        " of exchange points’ financial automation</p>\n<p>● Working with the Ethereum node</p>\n<p>● Interaction with the crypto-currency processing services APIs<br></p>\n<p>Required skills:&nbsp;</p>\n<p>● Over 3 years of experience in working with golang</p>\n<p>● Deep understanding of blockchain systems operation&nbsp;</p>\n<p>● Experience in development of crypto-currency services</p>\n<p>● Understanding of the HTTP / https / ajax / WebSocket protocol features&nbsp;</p>\n<p>● Knowledge of exchange terminology (order, trade, candle, volume) and the principles of market structure.</p>\n<p>● Deep knowledge of web application security</p>\n<p>● Technical background&nbsp;</p>\n<p>● Experience in working as part of a team&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: false,
      _id: "5ae457e4c46dec3930725438",
      title: "Product Manager",
      body:
        "<p>● You have over 3 years of experience in the PM position&nbsp;</p>\n<p>● You have managed at least two projects to targets levels. From scratch - preferred</p>\n<p>● Customer Development experience, ability to quickly verify hypotheses, create</p>\n<p>&nbsp;MVP solutions, conduct A / B tests, make product related decisions.</p>\n<p>● You practice a data-driven approach to decision-making.</p>\n<p>● Your Project Management skills are outstanding - you can set processes within the team, design functionality together with developers and release solutions on time meeting the deadlines.&nbsp;</p>\n<p>● You can single handedly resolve problems of any complexity</p>\n<p>● Your spoken English is at the Upper-intermediate level - you will have to conduct many in-depth interviews in English.<br></p>\n<p>Goals to be achieved:</p>\n<p>● Set up and maintain the hypothesis verification process with ongoing Customer Development and prototyping.</p>\n<p>● Find the Product &lt;&gt; Market fit new user segments and needs in the most interesting market in Africa.</p>\n<p>● Achieve multiple growth of the main product customer retention metrics&nbsp;</p>\n",
      subtitle: "",
      visible: true
    }
  ]
};

export default (careers = careersInit, { type, data }) => {
  switch (type) {
    case FETCH + CAREERS + START:
      return { ...careers, loading: true };
    case FETCH + CAREERS + SUCCESS:
      return {
        ...careers,
        loading: false,
        loaded: true,
        entities: mapper(data.entities)
      };
    case FETCH + CAREERS + FAIL:
      return { ...careers, loading: false };
  }
  return careers;
};
