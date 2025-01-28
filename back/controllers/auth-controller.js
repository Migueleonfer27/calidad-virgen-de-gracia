// Jaime Ortega
import { response, request } from "express"
import bcrypt from 'bcrypt'
import { AuthConnection } from "../databases/auth-connection/auth-connection.js"
import { generateJWT_roles } from "../helpers/generate-jwt.js"
import jwt from 'jsonwebtoken'

export const authConnection = new AuthConnection()

let blacklistedTokens = []

const AuthController = {
    revokeUserTokens: (token) => {
        blacklistedTokens.push(token)
    },
    login: async (req = request, res = response) => {
        const { email, password } = req.body
        try {
            const user = await authConnection.getUserRegistered(email, password)
            if (!user) {
                return res.status(400).json({ message: 'Email incorrecto' })
            }

            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ message: 'Contraseña incorrecto' })
            }

            const roles = await authConnection.getUserRoles(user.id)
            const token = await generateJWT_roles(user.id, roles)
            return res.status(200).json({ message: 'Login exitoso', user, token })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    logout: async (req = request, res = response) => {
        const user = req.params.id
        try {
            AuthController.revokeUserTokens(user)
            return res.status(200).json({ message: 'Logout exitoso' })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export { AuthController }