import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Provider} from 'react-redux';
import {match, RouterContext} from 'react-router'
import createStore from 'store'
import getRoutes from 'routes'
import prepareData from 'utils/prepareData'
import {compact} from 'lodash/array'
import getAsset from './getAsset';
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
    } else if (!renderProps) {
      return res.status(404).send('Not found');
    }

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
          {initialState, content, helmet, getAsset});

      })
      .catch(error => {
        return res.status(404).send('Not found');
        // return res.redirect(302, '/error/500?error=' + stringify(error));
      })
  })
}

