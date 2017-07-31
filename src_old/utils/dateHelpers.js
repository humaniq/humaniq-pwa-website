import moment from 'moment'

export const _date = (date, locale='en') => {
  moment.locale(locale)
  return moment(date).format('ll');
}

export const _isDateValid = (date) => {
  return moment(date).isValid();
}