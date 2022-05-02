import express from 'express'
import rateLimiter from 'express-rate-limit'
import { signIn, signUp, updateUser } from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'

const router = express.Router()

const apiLimiter = rateLimiter({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 10 minutes',
})

router.route('/sign-up').post(apiLimiter, signUp)
router.route('/sign-in').post(apiLimiter, signIn)
router.route('/update-email').patch(authenticateUser, updateUser)
router.route('/update-password').patch(authenticateUser, updateUser)
router.route('/update-fullname').patch(authenticateUser, updateUser)

export default router
