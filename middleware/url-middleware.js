import Url from '../models/Url.js'

const urlHandlerMiddleware = async (req, res) => {
  // Get the the url_code from the url endpoint (without the first '/') and find it in db.
  const url_code = req.url.slice(1)
  const url = await Url.findOne({ urlCode: url_code })
  if (!url) {
    res.status(404).send('Route does not exist')
  } else {
    // Get the IP of everyone who enter the link (I'm saving it in views).
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || null).split(':').slice(-1)[0];
    addViewToUrl(url_code, ip)
    res.redirect(url.longUrl)
  }
}

const addViewToUrl = async (urlCode, ip) => {
  const url = await Url.findOne({ urlCode })
  let updatedViews = {}
  if (url.views[ip]) {
    updatedViews = { ...url.views, [ip]: { amount: ++url.views[ip].amount } }
  } else {
    updatedViews = { ...url.views, [ip]: { amount: 1 } }
  }
  await Url.findOneAndUpdate(
    { urlCode },
    { views: updatedViews }, {
    new: true,
    runValidators: true,
  })
}

export default urlHandlerMiddleware
