import {parse} from 'qs'

export default function(store, {location, params, routes}){
  let query
  if(location){
    query = parse(location.search.substr(1))
  }
  const prepareDataFns = routes.map( route => route.prepareData).filter( el => !!el)
  return prepareDataFns.map(prepareData => prepareData(store, query, params, location))
}
