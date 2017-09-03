import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Provider} from 'react-redux';
import {match, RouterContext} from 'react-router'
import createStore from 'store'
import getRoutes from 'routes'
import prepareData from 'utils/prepareData'
import {compact} from 'lodash/array'
import webpackAssets from './webpackAssets';
import {createLocation} from 'history/lib/LocationUtils';
import Helmet from 'react-helmet'
import {stringify} from 'qs'

const store = createStore()

export default function(req, res){
  const location = createLocation(req.url);

  const routes = getRoutes(store)
  match({routes, location}, (error, redirectLocation, renderProps) => {

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }
    else if (error) {
      return res.status(500).end('Internal server error');
      console.log(error, {routes, location, error, redirectLocation, renderProps})
      // return res.redirect(302, '/error/500?error=' + stringify(error));
    } else if (!renderProps) {
      return res.status(404).send('Not found');
      // const url = location.pathname + location.search
      // return res.redirect(302, '/error/404?url=' + url);
    }
    //
    // let status
    // const regEx = /(\/error\/(?=(404|500)))/
    //
    // if(regEx.test(location.pathname)){
    //   status = + location.pathname.replace(regEx, '')
    // }else{
    //   status = 200
    // }

    const status = 200

    Promise.all(compact(prepareData(store, renderProps)))
      .then(() => {
        const initialState = JSON.stringify(store.getState())

        const content = ReactDOMServer.renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )

        const helmet = Helmet.rewind()
        res.status(status);
        res.render(
          'index',
          {initialState, content, helmet, webpackAssets});

      })
      .catch(error => {
        return res.status(404).send('Not found');
        // return res.redirect(302, '/error/500?error=' + stringify(error));
      })
  })
}

