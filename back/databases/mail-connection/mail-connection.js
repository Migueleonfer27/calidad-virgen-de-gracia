// Jaime Ortega
import { Users } from "../../models/associations.js"

class MailConnection {
    async updateUserPassword(user_id, newPassword) {
        await Users.update({ password: newPassword }, {
            where: { id: user_id }
        })
    }

    async getUserByEmail(email) {
        return await Users.findOne({
            where: { email: email }
        })
    }
}

export { MailConnection }