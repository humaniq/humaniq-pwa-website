import {SUCCESS, FETCH, START, FAIL, BY_REFERENCE} from 'constants'

const initPersonal = {
  loaded: false,
  loading: false,
  invitationCode: '1c472124-4fc9-418a-943f-683bd1fc8b13',
  name:{
    first_name:'Anton',
    last_name:'Anton'
  },
  phone_number: '+1 416-464-71ХХ',
  photo_url:'/img/1234.png'
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

