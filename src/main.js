const express = require('express')
const app = express()
const port = process.env.port || 3000
const bodyParser = require('body-parser')
const apiV1 = require('./routes/v1/routes')

app.use('/tvshow/api/v1', apiV1)

const server = app.listen(port, () => {
    console.log(`Server running at ${server.address().address} and listen port: ${server.address().port}`)
})