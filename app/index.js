const express = require("express")
const getRequests = require("./api/getRequests")
const Engine = require("./engine/engine")
const getDragon = require("./api/getDragon")
const getGeneration = require("./api/getGeneration")

const app = express()
const engine = new Engine()

app.locals.test = `<h2>test</h2>`
app.locals.engine = engine

engine.start()

app.use("/tt", getRequests)
app.use("/dragon", getDragon)
app.use("/generation", getGeneration)

module.exports = app