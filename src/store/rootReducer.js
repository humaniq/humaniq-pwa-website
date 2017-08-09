import { combineReducers } from 'redux'
import navigation from 'store/entities/navigation/reducer'
import partners from 'store/entities/partners/reducer'
import wikiArticles from 'store/entities/wikiArticles/reducer'
import wikiSearch from 'store/entities/wikiSearch/reducer'
import hmq from 'store/entities/hmq/reducer'
import transactions from 'store/entities/transactions/reducer'
import expStatistic from 'store/entities/expStatistic/reducer'
import ambassadors from 'store/entities/ambassadors/reducer'
import personal from 'store/entities/personal/reducer'

export default combineReducers({
  navigation,
  partners,
  ambassadors,
  wikiArticles,
  wikiSearch,
  hmq,
  expStatistic,
  transactions,
  personal
})
