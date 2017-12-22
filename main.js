'use strict'

import express from 'express'
import bodyParser from 'body-parser'
if (process.env.NODE_ENV !== 'production'){
	import logger from 'morgan'
}

import routes from './routes/index'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()
app.disable('x-powered-by')
if (process.env.NODE_ENV !== 'production'){
	app.use(logger('dev')
}
app.use('/api', routes)
app.listen(process.env.PORT || 8042)
