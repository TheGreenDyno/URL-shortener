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

//middleware
app.use(express.urlencoded({extended:true}))
//routes
app.use('/url', router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})