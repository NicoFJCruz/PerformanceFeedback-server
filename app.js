'use strict'

const express = require('express')
const volleyball = require('volleyball')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const routes = require('./routes')
require('dotenv').config()

const ORIGIN = process.env.DEV_PD_ORIGIN

const createApp = () => {
  const app = express()
  app.use(volleyball)
  app.use(express.json())
  app.use(cookieParser())
  app.use(
    cors({
      credentials: true,
      origin: 'http//localhost:3000',
    })
  )

  app.use('/api', routes)

  app.use('/', (req, res) =>
    res.send('Welcome to Performance Feedback Backend')
  )

  app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500)
    res.send(err)
  })

  return app
}

module.exports = createApp
