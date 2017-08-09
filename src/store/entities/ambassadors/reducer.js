import {SUCCESS, FETCH, AMBASSADORS} from 'constants'
import {ENPOINT_AMBASSADORS} from 'constants/api'

const initAmbassadors = {
  entities: [],
  loaded: false
}

function addUrl(arr){
  return arr.map( ({picLink2x, ...other}) => {
    return({
      ...other,
      logoLink2x: ENPOINT_AMBASSADORS + picLink2x
    })
  })
}

export default ( ambassadors = initAmbassadors, {type, data}) => {

  switch (type) {
    case FETCH + AMBASSADORS + SUCCESS:
      return {...ambassadors, loaded: true, entities: addUrl(data.ambassadors)}
  }

  return ambassadors;
};