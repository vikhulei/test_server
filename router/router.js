const { Router } = require("express")

const router = new Router()

router.get("/first", (req, res) => {
    res.send(`<h1 style="color: red">First</h1>`)
})

router.get("/second", (req, res) => {
    res.send(`<h1 style="color: blue">Second</h1>`)
})

module.exports = router