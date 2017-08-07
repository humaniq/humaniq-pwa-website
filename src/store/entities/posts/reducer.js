import {REQUEST, POSTS,  START, SUCCESS, FAIL} from 'store/constants'

const initPosts = {
  loading: false,
  loaded: false,
  ids: [],
  entities: {}
}

export default (posts = initPosts, {type, data}) => {

  switch (type) {
    case REQUEST + POSTS + START:
      return {...posts, loading: true}
    case REQUEST + POSTS + SUCCESS:
      return {loading: false, loaded: true, ...data}
    case REQUEST + POSTS + FAIL:
      return {...posts, loading: false}
  }
  return posts;
};