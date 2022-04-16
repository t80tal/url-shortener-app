import { StatusCodes } from 'http-status-codes'
import CustomError from './custom-error.js'

class UnprocessableEntity extends CustomError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNPROCESSABLE_ENTITY
  }
}

export default UnprocessableEntity
