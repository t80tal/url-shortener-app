import Url from '../models/Url.js'
import checkPermissions from '../utils/checkPermissions.js'
import { NotFoundError, UnprocessableEntity } from '../errors/index.js'
import { StatusCodes } from 'http-status-codes'
// For ObjectId.isValid
import mongoose from 'mongoose'


const createUrl = async (req, res) => {
    const longUrl = req.body.longUrl
    // Url Validation
    new URL(longUrl);
    // Generate unique random link code.
    let random_url_code = '';
    while (true) {
        random_url_code = Math.random().toString(36).substring(2, 12)
        const url = await Url.findOne({ urlCode: random_url_code })
        if (!url) {
            break
        }
    }
    // Insert to db with current userID as a creator.
    const url = await Url.create({ urlCode: random_url_code, longUrl, createdBy: req.user.userId })
    const { urlCode, views, id } = url
    res.status(StatusCodes.OK).json({
        id,
        urlCode,
        longUrl,
        views
    })
}

const deleteUrl = async (req, res) => {
    const { id: urlId } = req.params
    // Validate id
    if (!mongoose.Types.ObjectId.isValid(urlId)) {
        throw new NotFoundError(`No url with id :${urlId}`)
    }
    // Find the requested url (else throw not found exception)
    const url = await Url.findOne({ _id: urlId })
    if (!url) {
        throw new NotFoundError(`No url with id :${urlId}`)
    }
    // Check if have a permission to delete the url and if true then remove the requested url
    checkPermissions(req.user, url.createdBy)
    await url.remove()
    res.status(StatusCodes.OK).json({ msg: 'Success! Url removed' })
}

// Every user can get his own urls.
const getUrlsByUserId = async (req, res) => {
    const urls = await Url.find({ createdBy: req.user.userId })
    res.status(StatusCodes.OK).json(urls)

}

const updateUrlById = async (req, res) => {
    const { id: urlId } = req.params
    // Validate id
    if (!mongoose.Types.ObjectId.isValid(urlId)) {
        throw new NotFoundError(`No url with id :${urlId}`)
    }

    const { longUrl } = req.body
    if (!longUrl) {
      throw new UnprocessableEntity('Please provide url')
    }
    // Url Validation
    new URL(longUrl);
    
    const url = await Url.findOne({ _id: urlId })
    if (!url) {
      throw new NotFoundError(`No url with id :${urlId}`)
    }
    // check permissions
    checkPermissions(req.user, url.createdBy)
    const updatedUrl = await Url.findOneAndUpdate({ _id: urlId }, req.body, {
      new: true,
      runValidators: true,
    })
  
    res.status(StatusCodes.OK).json({ updatedUrl })
  }

export { createUrl, deleteUrl, getUrlsByUserId, updateUrlById }