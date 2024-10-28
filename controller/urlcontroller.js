const shortId = require('shortid')
const { URL } = require('../modules/urlModule')

const createPost = (req, res) => {
    const originalURL= req.body
    const shortURL = shortId.generate()
    console.log(`Original-URL: ${originalURL.url} \n short-Url: ${shortURL}`)
    URL.create({
        URL: originalURL.url,
        shortURL: shortURL
    })
    res.json({ create: "success", OriginalUrl: originalURL, shortURL: shortURL })

}
const handleRedirect=async (req,res)=>{
    const data = req.params
    console.log(data.shortId)

    const toRedirect = await URL.findOne({shortURL: data.shortId})
    console.log(toRedirect.URL)
    res.redirect(toRedirect.URL)
}

module.exports = {createPost, handleRedirect}