const express = require('express')
const app = express()
const port = 3000
const apiRoutes = require('./routes/index')



app.use('/', apiRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})