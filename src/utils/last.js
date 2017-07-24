import moment from 'moment';

let _singleton = null

class LastDate {
  constructor () {
    if(!_singleton) {
      this.last = moment()
      _singleton = this
    }
    else
      return _singleton
  }

  create() {
    this.last = this.last.subtract(Math.round(Math.random() * 100 / 5), 'm')
    return this.last
  }
}

export default LastDate