import { StatusCodes } from 'http-status-codes'
import CustomError from './custom-error.js'

class unprocessableEntity extends CustomError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNPROCESSABLE_ENTITY
  }
}

export default unprocessableEntity
