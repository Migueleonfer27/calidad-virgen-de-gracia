// Jaime Ortega 
import { Router } from 'express'
import { sendMail } from '../controllers/mail-controller.js'

export const router = Router()

router.post('/reset-password', sendMail)
