// Jaime Ortega
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { randomBytes } from 'crypto'
import { MailConnection } from '../databases/mail-connection/mail-connection.js'

dotenv.config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
})

let mailOptions = {
    from: process.env.MAIL_USER,
    to: '',
    subject: 'Recuperación de contraseña',
    text: '',
    html: '',
}

const connection = new MailConnection()

export const sendMail = (req, res) => {
    const { email } = req.body
    const newPassword = randomBytes(4).toString('hex')

    mailOptions.to = email
    mailOptions.text = `Su nueva contraseña es: ${newPassword}`
    mailOptions.html = `
        <h1>Nueva Contraseña</h1>
        <p>Su nueva contraseña es: <strong>${newPassword}</strong></p>
    `

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.log('Error al enviar el correo electrónico:', error)
            return res.status(203).json({ message: 'Correo no enviado' })
        }

        console.log('Correo electrónico enviado exitosamente:', info.response)
        
        try {
            const hashedPassword = await bcrypt.hash(newPassword, 10)
            const user = await connection.getUserByEmail(email)
            
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' })
            }

            await connection.updateUserPassword(user.id, hashedPassword)
            return res.status(200).json({ message: 'Correo enviado con la nueva contraseña' })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    })
}