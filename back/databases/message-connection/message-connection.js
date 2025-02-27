// Daniel Cruz
import { Op } from "sequelize";
import { Users, Message } from "../../models/associations.js";

export class MessageConnection {

    getMessages = async () => {
        let resultado = [];
        resultado = await Message.findAll();

        if (!resultado) {
            throw error;
        }
        return resultado;
    }

    getMessage = async (id) => {
        let resultado = [];
        resultado = await Message.findByPk(id);

        if (!resultado) {
            throw error;
        }
        return resultado;
    }

    getUserMessages = async (idUser) => {
        let resultado = [];
        resultado = await Message.findAll({
            where: {
                userId: {
                    [Op.eq]: idUser
                }
            },
            include: [
                {
                    model: Users,
                    as: 'user',
                    attributes: ['id', 'first_name', 'last_name']
                }
            ]
        });

        if (!resultado) {
            throw error;
        }
        return resultado;
    }

    insertMessage = async (message) => {
        try {
            const newMessage = await Message.create({
                message: message.message,
                userId: message.userId,
            });

            return await Message.findByPk(newMessage.id, {
                include: [
                    {
                        model: Users,
                        as: 'user',
                        attributes: ['id', 'first_name', 'last_name']
                    }
                ]
            });

        } catch (error) {
            return { error: error.errors[0].message };
        }
    }

    deleteMessage = async (id) => {
        let result = await Message.findByPk(id, {
            include: [
                {
                    model: Users,
                    as: 'user',
                    attributes: ['id', 'first_name', 'last_name']
                }
            ]
        })

        if (!result) {
            throw error
        }

        await result.destroy();

        return result;
    }
}

export default MessageConnection;