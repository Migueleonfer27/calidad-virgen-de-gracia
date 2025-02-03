// Jaime Ortega
import { Op } from 'sequelize'
import { Users, Roles, UsersRoles } from "../../models/associations.js";
import bcrypt from "bcrypt";

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
        if (!user) throw new Error('Usuario no encontrado')
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!passwordValid) throw new Error('Contraseña incorrecta')
        return user
    }

    async getUserRoles(user_id) {
        let user_roles = await UsersRoles.findAll({
            where: { user_id: user_id },
            attributes: ['id', 'user_id', 'role_id']
        })

        let roles = await Promise.all(user_roles.map(ur => Roles.findByPk(ur.role_id)))
        return roles.map(role => role.name)
    }
}

export { AuthConnection }