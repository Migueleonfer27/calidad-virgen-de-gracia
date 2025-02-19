// Jaime Ortega
import { Router } from 'express'
import { AuthController } from '../controllers/auth-controller.js'
import { emailMiddleware, passwordMiddleware } from '../middlewares/user-middleware.js'
import { validateJWT } from '../middlewares/auth-middleware.js'

export const router = Router()

router.post('/login', [emailMiddleware], AuthController.login)
router.post('/logout', [validateJWT], AuthController.logout)
router.get('/user_roles/:id', [validateJWT], AuthController.getUserRoles)