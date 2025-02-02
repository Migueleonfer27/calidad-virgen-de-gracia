// Jaime Ortega
import { Op } from 'sequelize'
import { Users } from "../../models/associations.js"

class MailConnection {
    async updateUserPassword(user_id, newPassword) {
        await Users.update({ password: newPassword }, {
            where: { id: user_id }
        })
    }

    async getUserByEmail(email) {
        return await Users.findOne({
            [Op.or]: [
                { email: email },
                { corporate_email: email }
            ]
        })
    }
}

export { MailConnection }