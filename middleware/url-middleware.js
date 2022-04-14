import Url from '../models/Url.js'

const urlHandlerMiddleware = async (req, res) => {
  // Get the the url_code from the url endpoint (without the first '/') and find it in db.
  const url_code = req.url.slice(1)
  const url = await Url.findOne({ urlCode: url_code })
  if (!url) {
    res.status(404).send('Route does not exist')
  } else {
    if (url.longUrl.slice(0, 4) === 'http') {
      res.redirect(url.longUrl)
    }
    longUrl = 'http://' + url.longUrl;
    res.redirect(longUrl)
  }
}

export default urlHandlerMiddleware
