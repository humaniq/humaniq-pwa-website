import fs from 'fs'
import request from 'superagent'
import { compact } from 'lodash/array'
import moment from 'moment'
const path = "data/installations.json"
if(!process.env.DOTENV_LOADED){
  require('dotenv').config();
}


export const write = async () => {
  try {
    let value = await fetchPostmanApi()

    await new Promise((res, rej) => {
      fs.writeFile(path, JSON.stringify(value), (err) => {
        if (err) rej(err)
        else res()
      })
    })

  } catch (err) {
    console.log(err.stack)
  }
}

export const read = async () => {
  let res = await new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) rej(err)
      else res(JSON.parse(data))
    })
  })

  return res
}

export const fetchPostmanApi = async () => {
  const login = process.env.MIX_PANEL_API_SECRET

  const MIX_PANEL_END_POINT = 'https://mixpanel.com/api/2.0/events/'
  const date_utc = moment().utc().format('YYYY-MM-DD')
  const mix_panel_config = {
    event: '["install"]',
    type: 'unique',
    from_date: '2017-12-14',
    to_date: date_utc,
    unit: 'day'
  }

  console.log(date_utc)
  let res = await request
    .get(MIX_PANEL_END_POINT)
    .query(mix_panel_config)
    .auth(login)

  let { data: {values:{install}} } = res.body
  let total_installations = 0
  Object.values(install).forEach( el => total_installations += el)


  return {total_installations}
}
