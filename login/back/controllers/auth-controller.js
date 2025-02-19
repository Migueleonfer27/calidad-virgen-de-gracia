// Jaime Ortega
import { response, request } from "express"
import bcrypt from 'bcrypt'
import { AuthConnection } from "../databases/auth-connection/auth-connection.js"
import { generateJWT_roles } from "../helpers/generate-jwt.js"

export const connection = new AuthConnection()

let blacklistedTokens = []

const AuthController = {
    revokeUserTokens: (token) => {
        blacklistedTokens.push(token)
    },
    login: async (req = request, res = response) => {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: 'Email y contraseña son requeridos' })
        }
        try {
            const user = await connection.getUserRegistered(email, password)
            if (!user) {
                return res.status(400).json({ message: 'Credenciales inválidas. Intente de nuevo.' })
            }

            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ message: 'Credenciales inválidas. Intente de nuevo.' })
            }

            const roles = await connection.getUserRoles(user.id)
            const token = await generateJWT_roles(user.id, roles)
            return res.status(200).json({ message: 'Login exitoso', user, token })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    logout: async (req = request, res = response) => {
        try {
            const token = req.headers.authorization?.split(' ')[1]
            if (!token) {
                return res.status(400).json({ message: 'Token no proporcionado' })
            }
            AuthController.revokeUserTokens(token)
            return res.status(200).json({ message: 'Logout exitoso' })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    getUserRoles: async (req = request, res = response) => {
        try {
            if (!req.user || !req.user.roles) {
                return res.status(403).json({ message: 'No hay roles en el token' })
            }
            return res.status(200).json({ message: 'Roles del usuario', data: req.user.roles })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
}

export { blacklistedTokens, AuthController }