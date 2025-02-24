/**Miguel y Daniel */
import { Users, Roles } from "../../models/associations.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../../helpers/mail-helper.js";
import { randomBytes } from 'crypto';
import { uploadFile, deleteFile } from "../../helpers/file-helper.js";

class UserConnection {
    async getUsers() {
        try {
            return await Users.findAll({
                include: [{
                    model: Roles,
                    through: {
                        attributes: []
                    },
                    attributes: ['id', 'position']
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
                    attributes: ['id', 'position']
                }]
            });
        } catch (error) {
            throw error;
        }
    }

    async createUser(user) {
        try {
            const passwordPlain = randomBytes(4).toString("hex"); 
            const passwordHashed = await bcrypt.hash(passwordPlain, 10);
            const newUser = await Users.create({ ...user, password: passwordHashed });
            await sendEmail(user.email, user.first_name, passwordPlain);
            return newUser;
        } catch (error) {
            console.error("Error al crear usuario:", error);
            throw error;
        }
    }

    async updateUser(id, user) {
        try {
            return await Users.update(user, { where: { id } });
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

    async updatePassword(idUser, newPassword) {
        try {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            const [updatedRows] = await Users.update(
                { password: hashedPassword }, 
                { where: { id: idUser } }
            );
            return updatedRows;
            
        } catch (error) {
            throw error;
        }
    }

    async updateProfilePic(idUser, img) {

        try {

            const user = await Users.findByPk(idUser);
            if (!user) {
                throw new Error("Usuario no encontrado.");
            }

            if (user.profile_picture) {
                await deleteFile(user.profile_picture);
            }
    
            const newImage = await uploadFile(img, undefined, 'profile-pictures');
    
            const [updatedRows] = await Users.update(
                { profile_picture: newImage }, 
                { where: { id: idUser } }
            );
    
            return updatedRows ? newImage : null;
            
        } catch (error) {
            throw error;
        }
    }
}

export { UserConnection };