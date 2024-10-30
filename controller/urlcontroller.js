const shortId = require('shortid')
const { URL } = require('../modules/urlModule')
const PORT = '8881'

const createPost = (req, res) => {
    const originalURL = req.body
    const shortURL = `${shortId.generate()}`
    URL.create({
        URL: originalURL.url,
        shortURL: shortURL
    }).then((data) => {
        console.log(data)
        return res.render('home', { url: originalURL.url, short: `http://localhost:${PORT}/${shortURL}` })
    })
        .catch((error) => {

            return res.render('home', { url: originalURL.url, short: null, error: 'URL already exists' });
        })


}
const handleRedirect = async (req, res) => {
    const data = req.params
    try {
        const toRedirect = await URL.findOne({ shortURL: data.shortId })
        console.log(`Redirecting to: ${toRedirect.URL}`)
        res.redirect(toRedirect.URL)
    } catch (err) {
        console.log(`error: ${err}`)
    }
}

const handleHomepage = (req, res) => {
    res.render('home', { name: "sweekar" })
}

module.exports = { createPost, handleRedirect, handleHomepage }