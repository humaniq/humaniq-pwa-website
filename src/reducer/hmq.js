import moment from 'moment';

const hmqInit = {
  data:{
    year: [],
    month: [],
    week: [],
    day: [],
    hour: [],
    all: []
  }
}
const format = {
  year: 'll',
  month: 'MMM DD',
  week: 'MMM DD, h a',
  day: 'DD HH:mm:ss',
  hour: 'HH:mm:ss',
  all: 'L'
}
function addDateShow({data, ...other}){
  const _res = {data:{}, ...other}
  for (let periods in data) {
    _res.data[periods] = data[periods].map(({date, ...other}) => {
      const dateShow = moment(date, 'YYYY-MM-DD, HH:mm:ss').format(format[periods])
      return {
        date,
        dateShow,
        ...other
      }
    })
  }
  return _res
}

export default (hmq = addDateShow(hmqInit), /* { type, data }*/ ) => {
  return hmq;
};


