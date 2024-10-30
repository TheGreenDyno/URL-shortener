const express = require('express')
const app = express()
const mongooseConnector = require('./conn')
const router = require('./routes/routes')
const PORT = '8881'
mongooseConnector('mongodb://127.0.0.1:27017/urlShortener')
    .then(() => {
        console.log('mongo connection successful')
    })
    .catch((error) => {
        console.log(error)
    })
app.use(express.static('public'))
//middleware
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
//routes
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})