import {ERROR} from 'store/constants'
const Console = console

export default () => next => action => {
  const {type, data} = action
  if (type !== ERROR) return next(action)

  Console.warn('error middleware notification :', data)
}