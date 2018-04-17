import schedule from 'node-schedule'
import { write } from "initializers/server/services/mixpanel"

schedule.scheduleJob('1 * * * *', async () => { await run() })

const run = async () => {
  console.log("start", new Date())


  try {
    await write()
  } catch (err) {
    console.log(err)
  }

  console.log("end", new Date())
}

