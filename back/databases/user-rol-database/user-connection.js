import { Users, Roles } from "../../models/associations.js";
import bcrypt from "bcrypt";

class UserConnection {
    async getUsers() {
        try {
            return await Users.findAll({
                include: [{
                    model: Roles,
                    through: {
                        attributes: []
                    },
                    attributes: ['position']
                }]
            });
        } catch (error) {
            throw error;
        }
    }

    async getUserById(id) {
        try {
            return await Users.findByPk(id, {
                include: [{
                    model: Roles,
                    through: {
                        attributes: []
                    },
                    attributes: ['position']
                }]
            });
        } catch (error) {
            throw error;
        }
    }

    async createUser(user) {
        try {
            const password = await bcrypt.hash(user.password, 10);
            return await Users.create({ ...user, password });
        } catch (error) {
            throw error;
        }
    }

    async updateUser(id, user) {
        try {
            const password = await bcrypt.hash(user.password, 10);
            return await Users.update({ ...user, password }, { where: { id } });
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            return await Users.destroy({ where: { id } });
        } catch (error) {
            throw error;
        }
    }
}

export { UserConnection };