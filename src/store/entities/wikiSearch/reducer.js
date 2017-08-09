import {WIKI_SEARCH, START, SUCCESS, FAIL, CLEAN} from 'store/constants'

const wikiSearchInit = {
  articles: [],
  request: '',
  total:0
}

export default (wikiSearch = wikiSearchInit, {type, data}) => {

  switch (type) {
    case WIKI_SEARCH + START:
      return {...wikiSearch, loading: true, request: data}
    case WIKI_SEARCH + SUCCESS:
      return {
        ...wikiSearch,
        loading: false,
        loaded: true,
        articles: data.articles,
        request: data.initdata,
        total: data.total
      }
    case WIKI_SEARCH + FAIL:
      return {...wikiSearchInit}
    case CLEAN + WIKI_SEARCH:
      return {...wikiSearchInit}
  }
  return wikiSearch;
};