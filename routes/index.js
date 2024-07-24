const express = require('express')
const Router = express.Router()
const generalRoutes = require("./generalRoutes")

Router.use('/general', generalRoutes)

module.exports = Router