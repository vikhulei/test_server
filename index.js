const express = require("express")
const port = 3000

const app = express()

app.listen(port, () => console.log(`listening on port ${port}`))

app.get("/test", (req, res) => {
    res.send("test")
})