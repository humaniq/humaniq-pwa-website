import {SUCCESS, FETCH, PARTNERS} from 'store/constants'
import {ENDPOINT_PARTNERS} from 'store/constants/api'

const initPartners = {
  entities: [],
  loaded: false
}

function addUrl(arr){
  return arr.map( ({logoLink2x, ...other}) => {
    return({
      ...other,
      logoLink2x: ENDPOINT_PARTNERS + logoLink2x
    })
  })
}

export default ( partners = initPartners, {type, data}) => {

  switch (type) {
    case FETCH + PARTNERS + SUCCESS:
      return {...partners, loaded: true, entities: addUrl(data.partners)}
  }

  return partners;
};