import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { UnprocessableEntity, UnAuthenticatedError } from '../errors/index.js'

// Sign-up path with validations.
const signUp = async (req, res) => {
  const { username, name, email, password } = req.body
  if (!username, !name || !email || !password) {
    throw new UnprocessableEntity('please provide all values')
  }
  const emailAlreadyExists = await User.findOne({ email })
  const usernameAlreadyExists = await User.findOne({ username })

  if (usernameAlreadyExists || emailAlreadyExists) {
    throw new UnprocessableEntity('Email / Username already in use')
  }
  const user = await User.create({ username, name, email, password })

  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({
    user: {
      token
    }
  })
}

// Sign-up path.
const signIn = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new UnprocessableEntity('Please provide all values')
  }
  const user = await User.findOne({ username }).select('+password')
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({
    user: {
      token
    }
  })
}

// Update user path.
const updateUser = async (req, res) => {
  const { email, name, password } = req.body
  if (!email || !name || !password) {
    throw new UnprocessableEntity('Please provide all values')
  }
  const user = await User.findOne({ _id: req.user.userId })

  user.email = email
  user.name = name
  user.password = password

  await user.save()

  const token = user.createJWT()

  res.status(StatusCodes.OK).json({
    user: {
      token
    }
  })
}

export { signUp, signIn, updateUser }
