import mongoose from 'mongoose'

// Connecting to mongoDB with mongoose.
const connectDB = (url) => {
  return mongoose.connect(url)
}
export default connectDB
