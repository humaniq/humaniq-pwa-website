import {Route, IndexRoute} from 'react-router'
import React from 'react'
import About from './About'
import App from './App'
import AppOld from './App_old'
import Home from './Home'
import Error from './Error'
import ContactUs from './ContactUs'
import legal from './Legal'
import OpenSource from './OpenSource'
import Ambassadors from './Ambassadors'
// import HmqExplorer from './Hmq'
import Wiki from './Wiki'
import Anniversary from './Anniversary'
import careers from './Careers'
import News1 from './News-1'
import News322 from './News-322'
import News21 from './News-21'
import News41 from './News-41'
import InstExchange from './InstExchange'
import Deeplink from './Deeplink'
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions'
import HumaniqReport2018 from './HumaniqReport2018'

const getRoutes = (store) => {
  return (
    <Route
      path="/"
      prepareData={App.prepareData}
    >
      <Route
        component={App}
      >
        <IndexRoute
          component={Home}
        />
        {legal}
        {/*{HmqExplorer(store)}*/}
        {careers}
        <Route path="open-source"
               prepareData={OpenSource.prepareData}
               component={OpenSource}
        />
        <Route path="ambassadors"
               prepareData={Ambassadors.prepareData}
               component={Ambassadors}
        />
          <Route path="contact-us"
                 component={ContactUs}
                 prepareData={ContactUs.prepareData}

          />
          <Route path="report-2018"
                 component={HumaniqReport2018}
                 prepareData={HumaniqReport2018.prepareData}

          />


          <Route path="/news-1"
                 component={News1}
          />
          <Route path="/news-322"
                 component={News322}
          />
          <Route path="/news-41"
                 component={News41}
          />
          <Route path="/news-21"
                 component={News21}
          />
          <Route path="/exchange"
                 component={InstExchange}
          />
        <Route
          path="/anniversary"
          component={Anniversary}
          prepareData={About.prepareData}
        />
        <Route
          path="/about"
          component={About}
          prepareData={About.prepareData}
        />
          <Route path="/faq"
                 component={FrequentlyAskedQuestions}
                 prepareData={FrequentlyAskedQuestions.prepareData}

          />
        <Route
          path="/error/:err"
          prepareData={Error.prepareData}
          component={Error}
        />

      </Route>
          <Route path="/deeplink"
                 component={Deeplink}
          />

      <Route
        component={AppOld}
      >
        {Wiki(store)}
      </Route>

      <Route
        component={App}
      >
        <Route
          path="*"
          prepareData={Error.prepareData}
          component={Error}
        />
      </Route>

    </Route >
  )
}


export default getRoutes