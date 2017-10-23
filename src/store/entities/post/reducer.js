import {REQUEST, CLOSE, POST, START, SUCCESS, FAIL} from 'store/constants'

const initPost = {
  loading: false,
  loaded: false,
  entry: {
    published:''
  },
}

export default (post = initPost, {type, data}) => {

  switch (type) {
    case CLOSE + POST:
      return {...initPost}
    case REQUEST + POST + START:
      return {...post, loading: true}
    case REQUEST + POST + SUCCESS:
      return {...post, loading: false, loaded: true, entry: data}
    case REQUEST + POST + FAIL:
      return {...post, loading: false}

  }
  return post;
};