// Jaime Ortega
import jwt from 'jsonwebtoken'

export const generateJWT = (uid = '') => {
    let token = jwt.sign({ uid }, process.env.SECRETORPRIVATEKEY, {
        expiresIn: '4h'
    })
    return token
}

export const generateJWT_roles = (uid = '', roles = []) => {
    let token = jwt.sign({ uid, roles }, process.env.SECRETORPRIVATEKEY, {
        expiresIn: '4h'
    })
    return token
}
