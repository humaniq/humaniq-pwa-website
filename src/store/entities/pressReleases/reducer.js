import {START, SUCCESS, FETCH, FAIL, PRESS_RELEASES} from 'store/constants'
import mapper from './mapper'

const pressReleasesInit = {
  loading: false,
  loaded: false,
  entities: []
}

export default (pressReleases = pressReleasesInit, { type, data } ) => {

  switch (type) {case FETCH + PRESS_RELEASES + START:
      return {...pressReleases, loading: true}
    case FETCH + PRESS_RELEASES + SUCCESS:
      return {...pressReleases, loading: false, loaded: true, entities: mapper(data.entities)}
    case FETCH + PRESS_RELEASES + FAIL:
      return {...pressReleases, loading: false}
  }
  return pressReleases;
};
