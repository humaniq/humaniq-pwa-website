import {ERROR, REALTIME_UPDATE_CONNECT} from 'constants'
import {realtimeUpdatesConnect, updateTransaction} from 'AC/hmqExp'
import request from 'superagent'
import messagingService from './messagingService'
import {stringify} from 'qs'

export const BACKEND_CALL = 'BACKEND_CALL'

const nextAction = (action, data) => (
  {...action, ...data, [BACKEND_CALL]: undefined}
)

export default (store) => next => action => {

  // `current` dispatches the action on the store, triggering this middleware again, while `next` bypasses it
  const current = store.dispatch;

  if (action.type === REALTIME_UPDATE_CONNECT) {
    return messagingService.connect()
      .then(() => {
        messagingService
          .onTransactionUpdateReceived(transaction => next(updateTransaction(transaction)))
          .onDisconnect(() => current(realtimeUpdatesConnect()))
      })
      .catch(() => console.log('Failed to connect to IoT broker!'));
  }

  if (!action[BACKEND_CALL]) return next(action)

  const [requestType, successType, failureType] = action[BACKEND_CALL].types
  const {data} = action[BACKEND_CALL]

  next(nextAction(action, {type: requestType, data}))
  const promise = APICall(action[BACKEND_CALL])

  promise.then(
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

function APICall({endpoint, method, query, payload}) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${endpoint}`)
    if (query)
      r.query(stringify(query))

    if (payload)
      r = r.send(payload)

    r.then(
      data => resolve(data.body),
      error => reject(error)
    )
  })
}