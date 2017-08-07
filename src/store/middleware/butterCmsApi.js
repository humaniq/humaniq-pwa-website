import request from 'superagent'
import {stringify} from 'qs'
import {BUTTER_CMS_API_URL, BUTTER_CMS_API_AUTH_TOKEN, BUTTER_CMS_API_ENDPOINTS} from 'store/constants/api'
import {REQUEST, CONTENT, WIKI, POST, START, SUCCESS, FAIL, ERROR} from 'store/constants'
import {convert} from 'utils'

export const BUTTER_CMS_CALL = 'BUTTER_CMS_CALL'

const nextAction = (action, data) => (
  {...action, ...data, [BUTTER_CMS_CALL]: undefined}
)

export default () => next => action => {
  if (!action[BUTTER_CMS_CALL]) return next(action)

  const
    {data, butter: butterType} = action[BUTTER_CMS_CALL],
    actionType = butterType === CONTENT ? data.collection.toUpperCase() : butterType,
    requestType = REQUEST + actionType + START,
    successType = REQUEST + actionType + SUCCESS,
    failureType = REQUEST + actionType + FAIL

  let
    endpoint = BUTTER_CMS_API_ENDPOINTS[butterType.toLowerCase()],
    query

  switch(butterType) {
    case WIKI:
    case CONTENT:
      let
        {collection, slugs} = data,
        keys
      if (!slugs || slugs.length === 0) {
        keys = collection.toLowerCase()
      } else {
        keys = slugs
          .map(arg => `${collection.toLowerCase()}[slug=${arg}]`)
          .join(',')
      }
      query = {keys}
      break;
    case POST:
      endpoint += data.id
  }

  next(nextAction(action, {type: requestType, data}))

  const promise = APICall({endpoint, query})

  promise.then(
    response => (
      next(nextAction(action, {
        data: preparation(butterType, response.data),
        type: successType
      }))
    ),
    error => {
      next(nextAction(action, {type: failureType}))
      next({type: ERROR, data: error})
    }
  )
  return promise;
}

function APICall({endpoint, query}) {
  return new Promise((resolve, reject) => {
    let
      r = request.get(`${BUTTER_CMS_API_URL + endpoint}`),
      authToken = {auth_token: BUTTER_CMS_API_AUTH_TOKEN}

    r.query(stringify(authToken))

    if (query)
      r.query(stringify(query))
    r.then(
      data => resolve(data.body),
      error => reject(error)
    )
  })
}

function preparation(butterType, data) {
  switch(butterType){
    case WIKI:
      return prepareWiki(data)
  }
  return data
}

function prepareWiki(data) {
  let _preparedData = {}
  for (let valueName in data) {
    const level0Title =  convert.toTitleCase(valueName)
    const _kebabCaseName = convert.toKebab(valueName)
    _preparedData[_kebabCaseName] = {
      ids: [],
      entities: {},
      level0Title
    }

    data[valueName].forEach(({title, category, article}) => {
      const pseudoId = convert.toCleanKebab(title)

      _preparedData[_kebabCaseName].ids.push(pseudoId)
      _preparedData[_kebabCaseName].entities[pseudoId] = {title, id:pseudoId, level0:_kebabCaseName, level1:category, article}
    })
  }
  return _preparedData
}