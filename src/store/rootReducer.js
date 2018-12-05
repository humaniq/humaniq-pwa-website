import { combineReducers } from 'redux'
import navigation from 'store/entities/navigation/reducer'
import partners from 'store/entities/partners/reducer'
import wikiArticles from 'store/entities/wikiArticles/reducer'
//import wikiSearch from 'store/entities/wikiSearch/reducer'
import hmqGraph from 'store/entities/hmqGraph/reducer'
// import transactions from 'store/entities/transactions/reducer'
import ambassadors from 'store/entities/ambassadors/reducer'
import hmqStatistic from 'store/entities/hmqStatistic/reducer'
import hmqMarkets from 'store/entities/hmqMarkets/reducer'
import hmqHolders from 'store/entities/hmqHolders/reducer'
import hmqHolder from 'store/entities/hmqHolder/reducer'
import hmqLog from 'store/entities/hmqLog/reducer'
import hmqBlock from 'store/entities/hmqBlock/reducer'
import hmqHash from 'store/entities/hmqHash/reducer'
import hmqSearch from 'store/entities/hmqSearch/reducer'
import home from 'store/entities/home/reducer'
import careers from 'store/entities/careers/reducer'


export default combineReducers({
  navigation,
  partners,
  ambassadors,
  wikiArticles,
  //wikiSearch,
  hmqGraph,
  hmqStatistic,
  hmqMarkets,
  hmqHolders,
  hmqHolder,
  hmqLog,
  hmqBlock,
  hmqHash,
  hmqSearch,
  home,
  careers
  // transactions,
})
