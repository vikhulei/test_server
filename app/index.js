const express = require("express")
const router = require("./api/getRequests")

const app = express()

app.locals.test = `<h2>test</h2>`

app.use("/test", router)

module.exports = app