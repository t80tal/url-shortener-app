import express from 'express'
import { createUrl } from '../controllers/urlController.js'
const router = express.Router()

// Create a new short link.
router.route('/create').post(createUrl)
// Edit / Delete / View own short link stats
router.route('/:id').get().patch().delete()

export default router