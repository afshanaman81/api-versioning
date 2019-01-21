const express = require('express')
const app = express()

// middleware


// api versions
app.use('/v1', require('./api/routes/index.v1.js'))
app.use('/v2', require('./api/routes/index.v2.js'))

app.listen(3000, () => {
    console.log("App Listening on 3000")
})

module.exports = app