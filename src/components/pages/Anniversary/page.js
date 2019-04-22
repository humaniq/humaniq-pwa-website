import React, { Component } from "react";
import * as T from "prop-types";
import "./styles.scss";
import { cssClassName } from "utils";
const cn = cssClassName("anniversary");
import A_Container from "A_Container";
import A_Title_H from "A_Title_H";
import A_H from "A_H";
import Opinion from './Opinion'

import A_P from "A_P";
import YouTube from "react-youtube";

const path = '/img/anniversary/'
const opinionsDate = [
  //{
  //  name: "Nick Ayton",
  //  title: 'Adviser',
  //  img: `${path}nick-ayton.png`,
  //  text: 'I have been with the team since the very beginning, when Alex Fork had written the first draft of the Humaniq Whitepaper. I have watched this project grow and flourish and become a force for real change. <br/>' +
  //  'Bringing opportunity to unbanked cannot be underestimated, thus Humaniq is a Blockchain pioneer for social good. The benchmark against for future projects will be measured. Blockchain technologies promise so much and Humaniq is literally the first the company funded by the crypto community that IS delivering on its promises. <br/>' +
  //  'I support social impact projects and Humaniq is now in a position to make a real difference in emerging markets, principally the African region. <br/>' +
  //  'It is a cause for hope, for change and creates the opportunity for prosperity and where communities can unlock their potential and exchange and trade what value they have.'
  //},
  {
    name: "Paul Mears",
    title: 'Adviser',
    img: `${path}paul-mears.png`,
    text: 'I work with Humaniq for 18 months approximately.<br/>' +
    'Humaniq is a company that is looking to utilise innovative technology and the power of cryptocurrency to bring developed world benefits to the emerging markets and less developed world <br/>' +
    ' I am passionate about Humanaiq as it has a purpose to imprive the lives of those who are less fortunate than us in the developed world. I am a strong advocate of enabling people to improve their lives by providing them with tools to take advantage of opportunities and facilitate change and to grow communities'
  },
  {
    name: "Anton Mozgovoy",
    title: 'Chief Technical Officer at Humaniq',
    img: `${path}anton-mozgovoy.png`,
    text: "I've been working for Humaniq for 1 year. <br/>" +
    "If I was to describe Humaniq's mission in one sentence, I'd say that we are here to provide social and financial services for the underserved communities. For those who don't have government IDs - we create digital identities; for those who don't have access to banking system - we create crypto wallets; for those who don't have access to private communication - we provide forever free and secure chats. As to the team, here in Humaniq we've managed to gather best of the best. It is the greatest team I've ever worked in. <br/>" +
    "Humaniq for me is an opportunity to build a platform for opportunities."
  },
  {
    name: "Serafima Semkina",
    title: 'Chief Administrative Officer at Humaniq',
    img: `${path}serafima-semkina.png`,
    text: 'I am with Humaniq team for 1 year and 4 months. <br />' +
    'Humaniq’s team has always been very consonant and vibrant while creating beautiful synergy. Humaniq is united by the joint desire to make world a better place. Every member of the team is emotionally motivated and it is very inspiring. Therefore the main purpose of Humaniq is to empower equality and kindness all across the globe and beyond <br />' +
    'For me Humaniq is a company that challenges status quo to achieve not only its goals, but reaching out to those in need.'
  },
  //{
  //  name: "Javed Khattak",
  //  title: 'Chief Financial Officer at Humaniq',
  //  img: `${path}javed-khattak.png`,
  //  text: "I have been with Humaniq since July 2017. <br />" +
  //  "I believe Humaniq and its goal of financial inclusion is absolutely fantastic. It calls out to me at many different levels, in particular as, while it brings alongside many economic opportunities, it is aimed at helping humanity, reducing poverty and improving lives in groups where the need is one of the highest. This sort of positive and humanitarian impact is very close to my heart.<br />" +
  //  "I feel that the entire team at Humaniq is great - we all get along and everyone is extremely talented. And we have the positive drive and motivation to keep moving forward with the Humaniq vision because I believe we all share that vision and these values of making the world a better place"
  //},
  {
    name: "Anastasia Yugai",
    title: 'Strategy and business development manager',
    img: `${path}anastasia-yugai.png`,
    text: "I am working Humaniq team since August 2017. <br />" +
    "Humaniq is the opportunity. Using our mobile app everyone can create their digital social capital to use it as a springboard for a better life. <br />" +
    "For me, Humaniq is the great team with true values. I am realy glad to be a part of such a wonderful project which tries to make people's lives easier."
  },
  {
    name: "Pius Okedinachi",
    title: 'Ambassador at Humaniq',
    img: `${path}pius-okedinachi.png`,
    text: "My first work with the Humaniq team was in August 2017. <br />" +
    "Humaniq, for me its timely. The objectives and the purpose for which it stands for. There is no better time to the reach the unbanked but now. I’ve always wanted to be a part of the Blockchain move which has Africa at heart, so, when I was introduced to Humaniq, my first question was to know its objectives and drive, and when I got the answer from the Whitepaper I was all in, trying to give my best. <br />" +
    "Humaniq to me is a FinTech, not just for now but for the future."
  },
  {
    name: "Oladimeji Shekoni",
    title: 'Ambassador at Humaniq',
    img: `${path}oladimeji-shekoni.png`,
    text: "I have been with Humaniq for a year now. <br />" +
    "I would describe Humaniq as a visionary concept, with the objective of assisting everyone around the world in achieving their life goals. It's not just about financial inclusion, it is about helping people who are underprivileged to live a normal life. It's about caring for the poor. It's about reaching the forgotten and everyone cut out of civilization. Achieving the goals set by Humaniq would mean putting an end to hunger, strife, and even wars in many parts of the world. This is more of humanitarian mission and its a purpose worth working for. <br />" +
    "The team of Humaniq have been fantastic and unrelenting, success is not a destination its a journey and they have shown how committed they are towards this journey within the past one year."
  },
  {
    name: "Chris Konstantopoulos",
    title: 'Investor',
    img: `${path}chris-konstantopoulos.png`,
    text: "I have been investing in crypto currencies for 2 years now.<br />" +
    "There has been no platform to date where the unbanked of the world can transact and be a part of the financial world, let alone the cryptocurrency one, until Humaniq came along. We always knew the “who, what, where” questions to this major issue and Humaniq solves the “how”. It is quite possibly the only solution to third world financial problems and a major advantage is they will start in a system that is noble and pure as opposed to the rest of the world that started on an archaic, corruptible and unfair platform. <br />" +
    "The team of Humaniq are some of the most amazing people you can talk to. They have the best people leading each role in the project with is very crucial to success. No matter what criticism comes their way, it really shows that they know what they are doing and only have the projects best intentions in mind."
  },
];

class Anniversary extends Component {


  getOpinions(){
    return(
      opinionsDate.map( (data, i) => <Opinion {...data} key={i} right={!!(i % 2)}/>)
    )
  }

  render() {
    const opts = {
      height: "500px",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        // autoplay: 1
      }
    };

    return (
      <A_Container mix={cn()}>
        <YouTube videoId="B91ZW1tlh10" opts={opts} />

        <A_Title_H type={"hero"} mix={cn("title")}>
          Humaniq Challenge Trailer 2018
        </A_Title_H>
        <hr />
        <A_P type={"first"} mix={cn("text")}>
          We held a major competition for startup projects which had a great
          potential to help the world's unbanked population. <br /> About 450
          participants who applied presented projects made especially for
          Humaniq, a decentralized financial platform.<br />3 winners were able
          to join the expedition to Kenya to gain a better understanding of
          unbanked people’s lives and needs.<br />The private screening of the
          full Humaniq Challenge story is coming up on 17th of May in Kenya,
          United Kingdom, United States, Belarus, Israel.
        </A_P>

        <A_Title_H type={"section"} mix={cn("title")}>
          Opinions
        </A_Title_H>

        <A_P type={"first"} mix={cn("text")}>
          Read what different people say about Humaniq, its goal and mission. We
          are really happy to have so many people believing in our common
          success!
        </A_P>
        <hr />
        {this.getOpinions()}
      </A_Container>
    );
  }
}

Anniversary.propTypes = {};

export default Anniversary;
