// Jaime Ortega
import jwt from 'jsonwebtoken'

export const generateJWT = (uid = '') => {
    let token = jwt.sign({ uid }, process.env.SECRETORPRIVATEKEY, {
        expiresIn: '4h'
    })
    return token
}

export const generateJWT_roles = (uid = '', roles = []) => {
    const formattedRoles = roles.map(role => ({
        role_id: role.id || role.role_id, 
        position: role.position 
    }))

    let token = jwt.sign({ uid, roles: formattedRoles }, process.env.SECRETORPRIVATEKEY, {
        expiresIn: '4h'
    })

    return token
}


export const getRolesToken = (token) => {
    try {
    const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
    return decoded.roles
    } catch (error) {
        return error.message
    }
}