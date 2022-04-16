import { StatusCodes } from 'http-status-codes'

// Created a custom error handler.
const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  }
  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.UNPROCESSABLE_ENTITY
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.UNPROCESSABLE_ENTITY
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`
  }
  if (err.code && err.code === 'ERR_INVALID_URL') {
    defaultError.statusCode = StatusCodes.UNPROCESSABLE_ENTITY
    defaultError.msg = `Invalid URL was given.`
  }
  // Returns a nice looking error message
  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}

export default errorHandlerMiddleware
