import {ERROR} from 'store/constants'
import request from 'superagent'
import {stringify} from 'qs'

export const BACKEND_CALL = 'BACKEND_CALL'

const nextAction = (action, data) => (
  {...action, ...data, [BACKEND_CALL]: undefined}
)

export default () => next => action => {
  if (!action[BACKEND_CALL]) return next(action)

  const [requestType, successType, failureType] = action[BACKEND_CALL].types
  const {data} = action[BACKEND_CALL]

  next(nextAction(action, {type: requestType, data}))

  const promise = APICall(action[BACKEND_CALL])

  promise
    .then(
    response => (
      next(nextAction(action, {data: {...response, initdata: data}, type: successType}))
    ),
    error => {
      next(nextAction(action, {type: failureType}))
      next({type: ERROR, data: error})
    }
  )
  return promise;
}

function APICall({endpoint, method, query, payload, headers, type}) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${endpoint}`)

    if (query)
      r.query(stringify(query))

    if (payload)
      r = r.send(payload)

    if(headers)
      r = r.set(headers)

    if(type)
      r = r.type(type)

    r.then(
      data => resolve(data.body),
      error => reject(error)
    )
  })
}