import express from 'express'

const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'
// db and authenticateUser
import connectDB from './db/connect.js'

// routers
import authRouter from './Routes/authRoutes.js'
import jobsRouter from './Routes/jobsRoutes.js'
// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(express.json())

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API' })
})
app.get('/', (req, res) => {
  res.json({ msg: 'welcome!' })
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log(`server is running on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
