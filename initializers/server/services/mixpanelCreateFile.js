import { write } from "initializers/server/services/mixpanel"

const run = async () => {
  try {
    console.log("write postman response in json")
    await write()
    process.exit()
  } catch (err) {
    console.log(err.stack)
  }
}

run()
