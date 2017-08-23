import { combineReducers } from 'redux'
import navigation from 'store/entities/navigation/reducer'
import partners from 'store/entities/partners/reducer'
import wikiArticles from 'store/entities/wikiArticles/reducer'
import wikiSearch from 'store/entities/wikiSearch/reducer'
import hmq from 'store/entities/hmq/reducer'
import transactions from 'store/entities/transactions/reducer'
import ambassadors from 'store/entities/ambassadors/reducer'
import personal from 'store/entities/personal/reducer'
import hmqStatistic from 'store/entities/hmqStatistic/reducer'
import hmqMarkets from 'store/entities/hmqMarkets/reducer'
import hmqHolders from 'store/entities/hmqHolders/reducer'
import hmqHolder from 'store/entities/hmqHolder/reducer'

export default combineReducers({
  navigation,
  partners,
  ambassadors,
  wikiArticles,
  wikiSearch,
  hmq,
  hmqStatistic,
  hmqMarkets,
  hmqHolders,
  hmqHolder,
  transactions,
  personal
})
