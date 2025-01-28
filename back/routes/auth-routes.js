// Jaime Ortega
import { Router } from 'express'
import { AuthController } from '../controllers/auth-controller.js'

export const router = Router()

router.post('/login', AuthController.login)
