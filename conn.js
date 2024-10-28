const mongoose = require('mongoose')
function mongooseConnecter(url) {
    return mongoose.connect(url)
}

module.exports = mongooseConnecter