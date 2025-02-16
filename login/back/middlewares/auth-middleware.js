// Jaime Ortega
import jwt from 'jsonwebtoken'
import {blacklistedTokens} from '../controllers/auth-controller.js'

const validateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Token no proveído' })
    }

    if (blacklistedTokens.includes(token)) {
        return res.status(401).json({ message: 'Token revocado' })
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(400).json({ message: 'Token inválido' })
    }
}

export { validateJWT }