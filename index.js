const express = require("express")
const router = require("./api/getRequests")
const port = 3000

const app = express()

app.locals.test = `<h2>test</h2>`

app.listen(port, () => console.log(`listening on port ${port}`))

app.use("/test", router)