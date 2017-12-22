'use strict'

import express from 'express'

import basicCtrl from '../controllers/basic.controller'

const router = express.Router()

router.get('/', basicCtrl.info)

export default router
