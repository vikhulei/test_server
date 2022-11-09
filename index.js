const express = require("express")
const router = require("./router/router")
const port = 3000

const app = express()

app.listen(port, () => console.log(`listening on port ${port}`))

app.use("/test", router)