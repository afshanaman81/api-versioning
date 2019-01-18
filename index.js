const express = require('express')
const app = express()

// middleware


// api versions
app.use('/v1', require('./api/routes/v1'))
app.use('/v2', require('./api/routes/v2'))

app.listen(3000, () => {
    console.log("App Listening on 3000")
})

module.exports = app