import {SUCCESS, FETCH, PARTNERS} from 'constants'

const initPartners = {
  entities:[]
}

export default ( partners = initPartners, {type, data}) => {

  switch (type) {
    case FETCH + PARTNERS + SUCCESS:
      return {...partners, entities: data.partners}
  }

  return partners;
};