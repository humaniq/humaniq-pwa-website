import {SUCCESS, FETCH, AMBASSADORS} from 'store/constants'
import {ENPOINT_AMBASSADORS} from 'constants/api'

const initAmbassadors = {
  entities: [],
  loaded: false,
  data: {
    ambassadors: [
      {
        name: "Achille Agbe Julien",
        country: "Cote d’Ivoire",
        bio: "Achille graduated from the Abidjan University and EDHEC Business School with a final degree in Private Business Law (Master). Has gained an MBA and also runs his own consulting firm (Ismarten Ltd). Achille acts as the Managing Director of EIC Corporation.",
        picLink: "/pics/AchilleAgbeJulien.png",
        picLink2x: "/pics/AchilleAgbeJulien_2x.png"
      }, {
        name: "Adewale Bankolo",
        country: "Nigeria",
        bio: "Adewale Bankolo is a prominent Nigerian Libertarian. Adewale describes himself as \"very passionate about issues pertaining to entrepreneurship, free market, cryptocurrency, and financial inclusion\". He is the Chapter Director (Nigeria) at the Bastiat Society - an international society of principled wealth creators.",
        picLink: "/pics/AdewaleBankolo.png",
        picLink2x: "/pics/AdewaleBankolo_2x.png"
      }, {
        name: "Alakanani Itireleng",
        country: "Botswana",
        bio: "Alakanani is a qualified teacher. She has a BA in humanities, Post Graduate Diploma in Education and MBA in international business. Alakanani is an entrepreneur, she runs a blockchain technology hub Satoshicentre. Alakanani is a bitcoin enthusiastic and trainer.",
        picLink: "/pics/AlakananiItireleng.png",
        picLink2x: "/pics/AlakananiItireleng_2x.png"
      }, {
        name: "Bashir Aminu",
        country: "Nigeria",
        bio: "Founder of Cryptogene, the largest cryptocurrency community in Africa and a hub that aims at the application and use of blockchain tools by producing quality products and end-user services valuable to enthusiastic and engaged individuals.",
        picLink: "/pics/BashirAminu.png",
        picLink2x: "/pics/BashirAminu_2x.png"
      }, {
        name: "Chernoh Saeed Sow",
        country: "Sierra Leone",
        bio: "CEO and founder of the Sierra Leone Bitcoin Network – SLBNet and also the Africoin Report blog on the Let’s Talk Bitcoin Network website. He is a tech entrepreneur and a bitcoin savvy person who has also been involved in many projects to help spread bitcoin knowledge in Sierra Leone and Africa as a whole.",
        picLink: "/pics/ChernohSaeedSow.png",
        picLink2x: "/pics/ChernohSaeedSow_2x.png"
      }, {
        name: "Donald Madzinga",
        country: "South Africa",
        bio: "Donald was born in Zimbabwe but he currently lives in South Africa. He trades currencies as well as provides consultancy on Blockchain technology to corporates.",
        picLink: "/pics/DonaldMadzinga.png",
        picLink2x: "/pics/DonaldMadzinga_2x.png"
      }, {
        name: "Itumeleng Isaac Lejone",
        country: "Lesotho",
        bio: "Itumeleng is a founder and CEO of IIL Capital - an investment company that focuses on venture capitalism for upcoming entrepreneurs. They also partner with other technology companies to build IOT, blockchain, games and other technology products.",
        picLink: "/pics/ItumelengIsaacLejone.png",
        picLink2x: "/pics/ItumelengIsaacLejone_2x.png"
      }, {
        name: "Karabo Segale",
        country: "South Africa",
        bio: "Karabo was born in South Africa and lives in North West Province in a small town called Rustenburg in Ramoga Village. Is an Ambassador for Humaniq, a businessman, is into trading and mining Bitcoins.",
        picLink: "/pics/KaraboSegale.png",
        picLink2x: "/pics/KaraboSegale_2x.png"
      }, {
        name: "Kayode Babarinde",
        country: "Nigeria",
        bio: "Kayode is currently working on \"Cryptocurrency and Blockchain Technology\" as his Masters project at the Centre for Entrepreneurship and Innovation, University of Ibadan, Nigeria.",
        picLink: "/pics/KayodeBabarinde.png",
        picLink2x: "/pics/KayodeBabarinde_2x.png"
      }, {
        name: "Koketso Pelo",
        country: "Botswana",
        bio: "Koketso is a director at Satoshi centre and is also studying software engineering in the Limkokwing University, with the area of interest in cryptocurrency and blockchain technology.",
        picLink: "/pics/KoketsoPelo.png",
        picLink2x: "/pics/KoketsoPelo_2x.png"
      }, {
        name: "Mogopodi Phiri",
        country: "South Africa",
        bio: "Technician with both scientific and engineering backgrounds. In 2015 he was introduced to Bitcoin and studied crypto-currencies and Blockchain technology and its applications through the internet, networking and joining crypto-currency discussion groups on different social media platforms.",
        picLink: "/pics/MogopodiPhiri.png",
        picLink2x: "/pics/MogopodiPhiri_2x.png"
      }, {
        name: "Mohammed Bukar",
        country: "Nigeria",
        bio: "Mohammed is a Humaniq Ambassador representing Abuja, Nigeria. He has a degree in Computer science and Masters in Information systems. Mohammed is also a crypto currency and blockchain enthusiast.",
        picLink: "/pics/MohammedBukar.png",
        picLink2x: "/pics/MohammedBukar_2x.png"
      }, {
        name: "Noah Roger Justin",
        country: "Cameroon",
        bio: "Noah is a cryptocurrency investor and trader, running bitcoin educational courses.",
        picLink: "/pics/NoahRogerJustin.png",
        picLink2x: "/pics/NoahRogerJustin_2x.png"
      }, {
        name: "Oladimeji Shekoni",
        country: "Nigeria",
        bio: "Oladimeji is a counselling Psychotherapist in Philadelphia Specialist Hospital, Lagos. Entrepreneur, Crypto-Enthusiast.",
        picLink: "/pics/OladimejiShekoni.png",
        picLink2x: "/pics/OladimejiShekoni_2x.png"
      }, {
        name: "Peter Samson",
        country: "Botswana",
        bio: "IT entrepreneur born in Mwanza region, currently living in Dar es Salaam region Tanzania. Peter has opened a Meetup group about Bitcoin just to bring bitcoiners together to discuss ways on how Bitcoin can be implemented in Tanzania. They prepared the Coinfest as a Bitcoin tradition to celebrate and exchange ideas about Bitcoin.",
        picLink: "/pics/PeterSamson.png",
        picLink2x: "/pics/PeterSamson_2x.png"
      }, {
        name: "Philip Agyei Asare",
        country: "Ghana",
        bio: "Philip is the Founder and CEO of Pak Universal Services and the founder of Dream Foundation Ghana, a non-profit created to empower young entrepreneurs, whom he says are the intellectual, social and cultural lifeblood of a country. Philip is also a member of the Conscious Entrepreneurship Foundation.",
        picLink: "/pics/PhilipAgyeiAsare.png",
        picLink2x: "/pics/PhilipAgyeiAsare_2x.png"
      }, {
        name: "Roderick P. Clantina",
        country: "Phillippines",
        bio: "Roderick is a private employee as an inventory assistant, but his area of interest is cryptocurrency and financial inclusion.",
        picLink: "/pics/RoderickPClantina.png",
        picLink2x: "/pics/RoderickPClantina_2x.png"
      }
    ]
  }
}

function addUrl(arr){
  return arr.map( ({picLink2x, ...other}) => {
    return({
      ...other,
      logoLink2x: ENPOINT_AMBASSADORS + picLink2x
    })
  })
}

export default ( ambassadors = initAmbassadors, {type, data}) => {
  return {...ambassadors, loaded: true, entities: addUrl(initAmbassadors.data.ambassadors)}

  /*switch (type) {
    case FETCH + AMBASSADORS + SUCCESS:
      return {...ambassadors, loaded: true, entities: addUrl(data.ambassadors)}
  }

  return ambassadors;*/
};