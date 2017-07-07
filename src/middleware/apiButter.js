import request from 'superagent'
import {stringify} from 'qs'
import {API_ROOT, AUTH_TOKEN, ENDPOINTS} from 'constants/api'
import {REQUEST, CONTENT, POSTS, WIKI, POST, START, SUCCESS, FAIL, ERROR} from 'constants'
import {convert} from 'utils'

export const BUTTER_API = 'BUTTER_API'

const nextAction = (action, data) => (
  {...action, ...data, [BUTTER_API]: undefined}
)

export default () => next => action => {
  if (!action[BUTTER_API]) return next(action)

  const
    {data, butter: butterType} = action[BUTTER_API],
    actionType = butterType === CONTENT ? data.collection.toUpperCase() : butterType,
    requestType = REQUEST + actionType + START,
    successType = REQUEST + actionType + SUCCESS,
    failureType = REQUEST + actionType + FAIL

  let
    endpoint = ENDPOINTS[butterType.toLowerCase()],
    query

  console.log(butterType, WIKI)
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
        data: {...response.data},
        // data: preparation(butterType, response), //who knows, maybe it could be needed for the blog
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
      r = request.get(`${API_ROOT + endpoint}`),
      authToken = {auth_token: AUTH_TOKEN}

    r.query(stringify(authToken))

    if (query)
      r.query(stringify(query))
    r.then(
      data => resolve(data.body),
      error => reject(error)
    )
  })
}

function preparation(butterType, response) {
  const _response = convert.obj.toCamel(response)
  let res = {}
  switch (butterType) {
    case CONTENT:
      const {data: contentData} = _response
      if (!contentData ) return res;
      const
        collectionName = Object.keys(contentData)[0],
        collectionArr = contentData[collectionName]

      collectionArr.forEach( obj => res[convert.toCamel(obj.slug)] = obj.value )
      return res
    case POSTS:
      const {meta:postsMeta, data:postsData} = _response
      if (!postsData || postsData.length === 0) return res;
      res = {
        meta:postsMeta,
        ids: [],
        entities: {}
      }
      postsData.forEach( obj => {
        const newObj = {...obj, id:obj.slug}
        delete newObj['slug'];

        res.ids.push(obj.slug)
        res.entities[obj.slug] = newObj
      })
      return res
    case POST:
      const {meta:postMeta, data:postData} = _response
      res = {meta:postMeta, ...postData}
      return res
  }
  return _response
}