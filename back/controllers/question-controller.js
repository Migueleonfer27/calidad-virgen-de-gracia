// Jaime Ortega
import { response } from 'express'
import { QuestionConnection } from '../databases/surveys-connection/question-connection.js'

export const connection = new QuestionConnection()

const QuestionController = {
    getAllQuestions: async (req, res = response) => {
        try {
            const questions = await connection.getAllQuestions()
            res.status(200).json(questions)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getQuestionById: async (req, res) => {
        try {
            const id = req.params.id
            const question = await connection.getQuestionById(id)
            if (!question) return res.status(404).json({ message: 'Pregunta no encontrada' })
            res.json(question)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    postQuestion: async (req, res) => {
        try {
            const question = await connection.postQuestion(req.body)
            res.status(201).json({ message: 'Pregunta creada', question })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    updateQuestion: async (req, res) => {
        try {
            const id = req.params.id
            const [updated] = await connection.updateQuestion(id, req.body)
            if (!updated) return res.status(404).json({ message: 'Pregunta no encontrada' })
            res.json({ message: 'Pregunta actualizada correctamente' })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    deleteQuestion: async (req, res) => {
        try {
            const id = req.params.id
            const deleted = await connection.deleteQuestion(id)
            if (!deleted) return res.status(404).json({ message: 'Pregunta no encontrada' })
            res.json({ message: 'Pregunta eliminada correctamente' })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export { QuestionController }
