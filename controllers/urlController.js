import Url from '../models/Url.js'
import { StatusCodes } from 'http-status-codes'
import Link from '../utils/Url.js'

const createUrl = async (req, res) => {

    // Url Validation is in the class
    const longUrl = new Link(req.body.longUrl).longUrl

    // Get unique random link code.
    let random_url_code = '';
    while (true) {
        random_url_code = Math.random().toString(36).substring(2, 10)
        const url = await Url.findOne({ urlCode: random_url_code })
        if (!url) {
            break
        }
    }
    
    // Insert to db with current userID as a creator.
    const url = await Url.create({ urlCode: random_url_code, longUrl, createdBy: req.user.userId })
    const { urlCode, views } = url
    res.status(StatusCodes.OK).json({
        urlCode,
        longUrl,
        views
    })
}

export { createUrl }