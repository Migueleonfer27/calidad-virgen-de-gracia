// Jaime Ortega
import { Op } from 'sequelize'
import { Users, Roles, UsersRoles } from "../../models/associations.js"
import bcrypt from "bcrypt"

class AuthConnection {
    async getUserRegistered(email, password) {
        let user = await Users.findOne({
            where: {
                [Op.or]: [
                    { email: email },
                    { corporate_email: email }
                ]
            },
        })
        if (!user) throw new Error('Credenciales inválidas. Intente de nuevo.')
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!passwordValid) throw new Error('Credenciales inválidas. Intente de nuevo.')
        return user
    }

    async getUserRoles(user_id) {
        let user_roles = await UsersRoles.findAll({
            where: { user_id: user_id },
            attributes: ['role_id']
        })

        let roles = await Promise.all(user_roles.map(async (ur) => {
            let role = await Roles.findByPk(ur.role_id)
            return { role_id: role.id, position: role.position }
        }))
        return roles
    }


}

export { AuthConnection }