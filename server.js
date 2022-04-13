import express from 'express'
import dotenv from 'dotenv'
import 'express-async-errors'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'
import morgan from 'morgan'
//db
import connectDB from './db/connect.js'
// routers
// Here I am going to import the auth route
// import authRouter from './routes/authRoutes.js'
// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
// Here I am going to import an authenticateUser middleware
// import authenticateUser from './middleware/auth.js'

const app = express()
dotenv.config()

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

// Here I'm going to add the auth route
// app.use('/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
