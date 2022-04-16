import express from 'express'
import { createUrl, deleteUrl, getUrlsByUserId, updateUrlById } from '../controllers/urlController.js'
const router = express.Router()

// Create a new short link.
router.route('/create').post(createUrl)
// Edit / Delete / View own short link stats
router.route('/:id').patch(updateUrlById).delete(deleteUrl)
router.route('/').get(getUrlsByUserId)

export default router