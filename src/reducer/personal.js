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
  photo_url:'https://storage.googleapis.com/production-tapatybe-facial-images/pe4Vnbfbui7MiDS20xxxtY?Expires=1501084818&GoogleAccessId=storage-manager%40humaniq-168420.iam.gserviceaccount.com&Signature=MO9X8ujUNNDHKekZ9cuEMMkDj%2FLBnxWU30w%2FKWU8RalWKLe5VL46ZRHKNMpAaLLUkllzeqPbVMmCOw5ugtKtq9qnG51wuT8rAIy0gcrmlsULQkqVjB2fQApzLBc0Cok5eRF%2FHAqmXpirnuQdaGIM8FkMTyGvz7NMArq4Yw%2FqMXHoq1BWKVB6%2BSW9F9adYaMylnjM4WtBlvFHqLcW2h8oWE6%2FSodRcQZlXSEDz7yEFmdRDNnPbD0KqzPp2BUizcU2%2F8rcKFBPpb9%2Bv2k4nEqSKgvUTLB%2FozZIGZtrnbXwepcb3pC0kyxjySOVfgFjaDan2BuPkkK8Se8QKuM0NChjnw%3D%3D'
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

