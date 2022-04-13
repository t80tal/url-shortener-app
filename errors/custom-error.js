// I created a custom exceptions with html-status-code & message.

class CustomError extends Error {
  constructor(message) {
    super(message)
  }
}

export default CustomError
