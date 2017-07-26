import {SUCCESS, FETCH, START, FAIL, BY_REFERENCE} from 'constants'

const initPersonal = {
  loaded: false,
  loading: false,
  invitationCode: '',
  name:{
    first_name:'',
    last_name:''
  },
  phone_number: '',
  photo_url: ''
}

export default (personal = initPersonal, {type, data}) => {

  switch (type) {
    case FETCH + BY_REFERENCE + START:
      return {...personal, loading: true, invitationCode: data}
    case FETCH + BY_REFERENCE + SUCCESS:
      const {phone_number:{country_code, phone_number}} = data
      const _pn = phone_number.substring(0, phone_number.length - 2) + 'XX'
      const _phone = `+${country_code} (${_pn.substr(0, 3)}) ${_pn.substr(3, 3)} ${_pn.substr(6, 10)}`

      return {...personal,
        ...data,
        phone_number:_phone
      }
    case FETCH + BY_REFERENCE + FAIL:
      return {...personal, loading: false}
  }
  return personal;
};