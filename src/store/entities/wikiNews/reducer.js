import {REQUEST, WIKI_NEWS, START, SUCCESS, FAIL} from 'store/constants'
import mapper from './mapper'

const initLevel0 = {
  level0Title: '',
  ids:[],
  entities: {}
}

const initWikiNews = {
  loading: false,
  loaded: false,
  'humaniq_news': {...initLevel0 },
  descriptions:[
  ]
}

export default (wikiNews = initWikiNews, {type, data}) => {
  switch (type) {
    case REQUEST + WIKI_NEWS + START:
      return {...wikiNews, loading: true};
    case REQUEST + WIKI_NEWS + SUCCESS:
      return {...wikiNews, loading: false, loaded: true, ...mapper(data)};
    case REQUEST + WIKI_NEWS + FAIL:
      return {...wikiNews, loading: false};
  }
  return wikiNews;
};