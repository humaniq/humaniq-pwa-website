export const BUTTER_CMS_API_URL = 'https://api.buttercms.com/v2'
export const BUTTER_CMS_API_AUTH_TOKEN = 'b251deef79e07f942e09e2df3fb18755f90522f2'


export const BUTTER_CMS_API_ENDPOINTS = {
  post: `/posts/`,
  posts: `/posts/`,
  content: `/content/`,
  wiki: `/content/`
}

const CMS_BACKEND = process.env.CMS_BACKEND
// const CMS_BACKEND = __DEVELOPMENT__ ? 'http://localhost:4000' : process.env.CMS_BACKEND

// const DOMAIN_CMS = 'http://188.166.170.8'

// export const PORT = `:4000`

export const ENDPOINT_CAREERS = `${CMS_BACKEND}/v1/vacancies`
// const DOMAIN_CMS = __DEVELOPMENT__ ? 'http://localhost' : 'http://188.166.170.8'

export const ENDPOINT_PRESS_RELEASES = `${CMS_BACKEND}/v1/press-releases`

export const WEBSITE_DOMAIN_NAME = 'humaniq.com'
export const HUMANIQ_BACKEND_API_URL = 'https://f03pn9k2v8.execute-api.eu-west-1.amazonaws.com'
export const ENDPOINT_JOIN_FORM = `${HUMANIQ_BACKEND_API_URL}/dev/subscriptions/partners`
export const ENDPOINT_SUBSCRIBE_FORM = `${HUMANIQ_BACKEND_API_URL}/dev/subscriptions/newsletters`
export const ENDPOINT_AMBASSADORS_FORM = `${HUMANIQ_BACKEND_API_URL}/dev/subscriptions/ambassadors`

export const ENDPOINT_PARTNERS = `https://s3-eu-west-1.amazonaws.com/humaniq-web-backend-public/partners`
export const ENDPOINT_PARTNERS_LIST = `${ENDPOINT_PARTNERS}/partners.json`

export const ENPOINT_AMBASSADORS = 'https://s3-eu-west-1.amazonaws.com/humaniq-web-backend-public/ambassadors'
export const ENPOINT_AMBASSADORS_LIST = `${ENPOINT_AMBASSADORS}/ambassadors.json`

export const ENDPOINT_WIKI_SEARCH = 'https://f03pn9k2v8.execute-api.eu-west-1.amazonaws.com/dev/articles/search'

export const AUTH_HEADERS = {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkOGE5ZjhhNTk3YzU0ZjkxOWVlZDRmMWRmOTU2NjQwMiIsImlhdCI6MTUwMjI2NzM3NSwiZXhwIjpudWxsLCJhdWQiOiJodHRwOi8vaHVtYW5pcS5jb20iLCJzdWIiOiIifQ.VtxsTEM9pQTdQ1Acr1BL_v-4wk2Hgl3Wwjdfjy5iBmI'}


export const ENDPOINT_HMQ_STATISTICS = `${HUMANIQ_BACKEND_API_URL}/dev/blockchain/stats?extended=true`
export const ENDPOINT_HMQ_MARKETS = `${HUMANIQ_BACKEND_API_URL}/dev/markets`
export const ENDPOINT_HMQ_HOLDERS = `${HUMANIQ_BACKEND_API_URL}/dev/blockchain/wallets`
export const ENDPOINT_HMQ_LOG = `${HUMANIQ_BACKEND_API_URL}/dev/blockchain/transactions`
export const ENDPOINT_HMQ_BLOCK = `${HUMANIQ_BACKEND_API_URL}/dev/blockchain/blocks/`
export const ENDPOINT_HMQ_GRAPH = `${HUMANIQ_BACKEND_API_URL}/dev/exchange/rates`
export const ENDPOINT_HMQ_HASH = `${HUMANIQ_BACKEND_API_URL}/dev/blockchain/transactions/`
export const ENDPOINT_HMQ_SEARCH = `${HUMANIQ_BACKEND_API_URL}/dev/blockchain/search`
export const ENDPOINT_USERS_NUMBER = `${__SERVER__ ? `:${process.env.PORT || 8080}` : ''}/v1/mixpanel`