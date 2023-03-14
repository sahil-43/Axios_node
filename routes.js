const express = require("express")
const app = express()
const user = require('./route/user')



app.use("/user", user)


module.exports = app