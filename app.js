/*
Thu, March 17 2022
Hacktiv8 Node JS

Bagas Dewaggono, FPMIPA UPI
Todo Apps
*/
const express = require('express')
const app = express()
const port = 3000
const locationRoutes = require('./routes/location')
const todoRoutes = require('./routes/todo')
const userRoutes = require("./routes/user")
const productRoutes = require("./routes/product")

app.use(express.json())

app.use('/location', locationRoutes)
app.use('/todos', todoRoutes)
app.use('/user', userRoutes)
app.use('/product', productRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})