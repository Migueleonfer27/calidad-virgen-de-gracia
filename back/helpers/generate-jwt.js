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

export const generateJWT_rolesTest = (uid = '', roles = []) => {
    const formattedRoles = roles.map(role => ({
        role_id: role.id || 1,  // Si el rol no tiene un ID, asigna 1 por defecto
        position: role.position || role // Si roles era un array de strings, úsalo como position
    }));

    let token = jwt.sign(
        { uid, roles: formattedRoles },
        process.env.SECRETORPRIVATEKEY,
        { expiresIn: '4h' }
    );

    return token;
};
