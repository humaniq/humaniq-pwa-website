// import {numberFormat} from 'utils'
import moment from 'moment'

const dateFormat = date =>
  moment(date)
    .local()
    .format('DD/MM/YYYY')

const mapper = (data = []) =>
  data.map(({ updatedAt, createdAt, ...other }) => ({
    createdAt: dateFormat(createdAt),
    edited: createdAt !== updatedAt,
    ...other,
  }))

export default mapper