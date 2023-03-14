const express = require("express")
const { add } = require("../controller/user")

const app = express()

app.post("/add", add)


module.exports = app