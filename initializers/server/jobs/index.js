import schedule from 'node-schedule'
import { write } from "initializers/server/services/mixpanel"

schedule.scheduleJob('1 * * * *', async () => { await run() })

const run = async () => {
  console.log("start", new Date())

  console.log("create json file response mixpanel")
  await write()

  console.log("end", new Date())
}

