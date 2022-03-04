/*
Fri, Feb 25 2022
Hacktiv8 Node JS

Bagas Dewaggono, FPMIPA UPI
Todo Apps
*/
const express = require('express')
const app = express()
const port = 3000
const locationRoutes = require('./routes/location')

app.use(express.json())

app.use('/location', locationRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})