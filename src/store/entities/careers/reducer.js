import {START, SUCCESS, FETCH, FAIL, CAREERS} from 'store/constants'
import mapper from './mapper'

const careersInit = {
  loading: false,
  loaded: false,
  entities: []
}

export default (careers = careersInit, { type, data } ) => {

  switch (type) {
    case FETCH + CAREERS + START:
      return {...careers, loading: true}
    case FETCH + CAREERS + SUCCESS:
      return {...careers, loading: false, loaded: true, entities: mapper(data.entities)}
    case FETCH + CAREERS + FAIL:
      return {...careers, loading: false}
  }
  return careers;
};
