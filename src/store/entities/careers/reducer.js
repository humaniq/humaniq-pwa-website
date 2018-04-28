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
        "<h3>Duties and responsibilities:</h3>\n<p>● Procurement of native advertising<br />● Purchase of banner advertising<br />● CPA<br />● Purchase of video advertising<br />● Working on analytics and conversion optimisation<br />● Distribution of traffic via affiliate programs<br />● Testing / developing of creative content<br />● Cooperation with PR, SMM and trading departments<br />● Retargeting&nbsp;</p>\n<br/><h3>Required skills:</h3>\n<p>● Experience in working with crypto-currency projects<br />● Experience in working with end-to-end analytics systems<br />● Analytical mindset<br />● Experience in working with crypto-exchange partner networks<br />● Ability to perform tasks quickly and accurately<br />● Ability to bypass FB and Google limitations<br />● Punctuality and diligence<br />● Experience in working with analytics systems other than GA (Ninjacat, Mixpanel, Thrivehive, Looker, Funnel.io, Bizible, Maroon.ai)<br />● Spoken English, along with German, French, Korean and Chinese<br />● Ability and willingness to relocate - preferre&nbsp;</p>\n",
      subtitle: "(Post-ICO Marketing) ",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: false,
      _id: "5ae4573bc46dec3930725432",
      title: "Head of PR ",
      body:
        "<p><strong>Duties and responsibilities:</strong><br />● Generation of info traffic<br />● Progressing tasks from the initial data input stage to a published article with the shortest possible turnaround<br />● Co-operation with content producers and SMM manager<br />● Working with analytical systems (Meltwater, Cision, MuckRack, Anewstip, Traackr, Haro, hey.press)<br />● Online liaison with partners (exchanges, exchange points)</p>\n<br/><p><strong>Required skills:</strong><br />● Experience in working with crypto-currency media (selection criteria - a portfolio of case studies to hand)<br />● Availability of own database of journalist contacts<br />● Prior experience in working with top-tier financial publications<br />● Creativity, good imagination<br />● Knowledge of the financial market and commercial terminology<br />● Locating startups, finances, and crypto-currency projects within the market context<br />● Spoken English, along with German, French, Korean and Chinese<br />● Knowledge of the unbanked market - bonus&nbsp;<br />● Contacts in alternative blockchain projects - bonus&nbsp;<br />● A desire to develop and grow professionally, openness, zest&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: false,
      _id: "5ae45751c46dec3930725433",
      title: "Head of SMM & Community management",
      body:
        "<p><strong>Duties and responsibilities:</strong><br />● Working with a community (AMA, webinars, events and competitions, other entertainment)<br />● Maintaining the project social networks - Twitter, Facebook, Instagram, Reddit<br />● Bitcointalk, Reddit forum support<br />● Social networking strategy development&nbsp;<br />● Working with the PR, analytical, traffic and trading departments<br />● Working with Influencers<br />● Working with bounty managers<br />● Company image-making&nbsp;<br />● Working with analytics systems<br />● Post-automation</p>\n<br/><p><strong>Required skills:</strong><br />● Experience in working with crypto-currency projects<br />● Creativity (portfolio of creative content)<br />● Spoken English (German, French, Korean and Chinese will be a bonus)<br />● Knowledge of the unbanked market - bonus<br />● Contacts in other blockchain projects - bonus<br />● Locating startups, finances, and crypto-currency projects within the market context<br />● Proactive, independent, strong communication skills<br />● Ability to answer complex questions<br />● Willingness to relocate - preferred&nbsp;&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: true,
      _id: "5ae45764c46dec3930725434",
      title: "E-mail marketing manager",
      body:
        "<p><strong>Duties and responsibilities:</strong><br />● Project e-mail marketing strategy development (automatic, trigger, manual distribution)<br />● Base segmentation<br />● Analytics and optimisation of mailing lists (AB testing)<br />● Preparation and creation of e-mail newsletters using built-in editors<br />● Creation of manual and automated mailing lists&nbsp;</p>\n<br/><p><strong>Required skills:</strong><br />● Experience in the fintech industry<br />● A set of prior successful e-mail generation cases available&nbsp;<br />● Fluent English, copywriting skills<br />● Knowledge of HTML / CSS and experience in writing emails<br />● Ability to select email content and understanding the basic principles of email design&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: false,
      _id: "5ae4577ec46dec3930725435",
      title: "Project Manager",
      body:
        "<p><strong>Role specifics:</strong><br />Web token exchange, airdrop, analytics dashboard, investor" +
        " profile, trading bot development, development of smart contracts and a decentralised exchange, crowd" +
        " funding platform development.<br /><strong><br />Duties and responsibilities:</strong><br />● TOR" +
        " drafting for the product team<br />● Monitoring of implementation and deadlines&nbsp;<br />● Assessment of sub-project budgeting<br />● Development of selected projects in accordance with user requests<br />● Suggesting new features.</p>\n<br/><p><strong>Required skills:</strong></p>\n" +
        "" +
        "<p>● Ability to formalise product requirements based on the founder high-level vision&nbsp; <br />● " +
        " Previous product/project manager work experience in the blockchain field&nbsp;</li>\n" +
        "<br />● Strong cryptocurrency market knowledge and understanding of pertaining terminology<br />● Experience in managing a team of product experts (design, frontend, backend)&nbsp;</p>\n",
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
        " fintech<br />○ Multitude of diagrams, graphs, progress bars<br />○ Trading interfaces<br />○" +
        " Mathematical calculations<br />● Technical support for the marketing department&nbsp;<br />○" +
        " Technical execution of AB tests<br />○ Analytics, cross-cutting analytics</p>\n" +
        "<p>● Analytics dashboard" +
        " development&nbsp;<br/>○ Working with map APIs (geolocation)&nbsp;<br/>○&nbsp;Interaction with internal and" +
        " external API services</p>" +
        "<br/><h3>Required skills:</h3><p>● Experience in working with the React / Redux / ES6 /" +
        " Webpack / Babel / npm stack<br />● Experience in working with Canvas / d3 / TradingView graphics libraries<br />● Understanding of the HTTP / https / ajax / WebSocket protocol features&nbsp;<br />● Understanding the principles of blockchain operation and knowledge of associated terminology (token, address, private key, hash)<br />● Understanding of the basics of web application security<br />● Knowledge of exchange terminology (order, trade, candle, volume) and principles of the market structure.<br />● Technical background<br />● Accuracy, precision&nbsp;<br/>● Experience in working as part of a team&nbsp;&nbsp;</p>\n",
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
        " and responsibilities:</strong><br />● Interaction with the APIs of various exchanges&nbsp;<br />●" +
        " Development" +
        " of exchange points’ financial automation<br />● Working with the Ethereum node<br />● Interaction with the crypto-currency processing services APIs<br><br />Required skills:&nbsp;<br />● Over 3 years of experience in working with golang<br />● Deep understanding of blockchain systems operation&nbsp;<br />● Experience in development of crypto-currency services<br />● Understanding of the HTTP / https / ajax / WebSocket protocol features&nbsp;<br />● Knowledge of exchange terminology (order, trade, candle, volume) and the principles of market structure.<br />● Deep knowledge of web application security<br />● Technical background&nbsp;<br />● Experience in working as part of a team&nbsp;</p>\n",
      subtitle: "",
      visible: true
    },
    {
      createdAt: "28/04/2018",
      edited: false,
      _id: "5ae457e4c46dec3930725438",
      title: "Product Manager",
      body:
        "<p>● You have over 3 years of experience in the PM position&nbsp;<br />● You have managed at least two projects to targets levels. From scratch - preferred<br />● Customer Development experience, ability to quickly verify hypotheses, create<br />&nbsp;MVP solutions, conduct A / B tests, make product related decisions.<br />● You practice a data-driven approach to decision-making.<br />● Your Project Management skills are outstanding - you can set processes within the team, design functionality together with developers and release solutions on time meeting the deadlines.&nbsp;<br />● You can single handedly resolve problems of any complexity<br />● Your spoken English is at the Upper-intermediate level - you will have to conduct many in-depth interviews in English.<br><br />Goals to be achieved:<br />● Set up and maintain the hypothesis verification process with ongoing Customer Development and prototyping.<br />● Find the Product &lt;&gt; Market fit new user segments and needs in the most interesting market in Africa.<br />● Achieve multiple growth of the main product customer retention metrics&nbsp;</p>\n",
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
