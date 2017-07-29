import {REQUEST, WIKI, START, SUCCESS, FAIL} from 'constants'

const initPosts = {
  loading: false,
  loaded: false,
  technical: [],
  about: []
}

export default (wiki = initPosts, {type, data}) => {

  let technical, about
  switch (type) {
    case REQUEST + WIKI + START:
      return {...wiki, loading: true}
    case REQUEST + WIKI + SUCCESS:
      technical = data.technical_mecca
      about = data.about_humaniq
      return {loading: false, loaded: true, technical, about}
    case REQUEST + WIKI + FAIL:
      return {...wiki, loading: false}
  }
  return wiki;
};