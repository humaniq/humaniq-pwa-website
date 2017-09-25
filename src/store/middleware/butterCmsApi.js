import request from 'superagent'
import {stringify} from 'qs'
import {BUTTER_CMS_API_URL, BUTTER_CMS_API_AUTH_TOKEN, BUTTER_CMS_API_ENDPOINTS} from 'store/constants/api'
import {REQUEST, CONTENT, WIKI, POST, START, SUCCESS, FAIL, ERROR} from 'store/constants'

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
        data: response.data,
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