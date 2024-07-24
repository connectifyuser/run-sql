const express = require("express");
const Router = express.Router();

Router.get('/checkHealth', (req, res) => {
  res.send({message : 'Server is up and running!'})
})

module.exports = Router
