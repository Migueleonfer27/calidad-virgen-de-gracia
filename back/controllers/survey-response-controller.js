// Jaime Ortega
import { response } from 'express'
import { SurveyResponseConnection } from '../databases/surveys-connection/survey-response-connection.js'

export const connection = new SurveyResponseConnection()

const SurveyResponseController = {
    getAllSurveyResponses: async (req, res = response) => {
        try {
            const responses = await connection.getAllSurveyResponses()
            res.status(200).json(responses)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getSurveyResponseById: async (req, res) => {
        try {
            const id = req.params.id
            const response = await connection.getSurveyResponseById(id)
            if (!response) return res.status(404).json({ message: 'Respuesta no encontrada' })
            res.json(response)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getResponsesBySurveyId: async (req, res) => {
        try {
            const surveyId = req.params.surveyId
            const responses = await connection.getResponsesBySurveyId(surveyId)
            res.json(responses)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getResponsesByQuestionId: async (req, res) => {
        try {
            const questionId = req.params.questionId
            const responses = await connection.getResponsesByQuestionId(questionId)
            res.json(responses)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    postSurveyResponse: async (req, res) => {
        try {
            const response = await connection.postSurveyResponse(req.body)
            res.status(201).json({ message: 'Respuesta creada', response })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    updateSurveyResponse: async (req, res) => {
        try {
            const id = req.params.id
            const [updated] = await connection.updateSurveyResponse(id, req.body)
            if (!updated) return res.status(404).json({ message: 'Respuesta no encontrada' })
            res.json({ message: 'Respuesta actualizada correctamente' })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    deleteSurveyResponse: async (req, res) => {
        try {
            const id = req.params.id
            const deleted = await connection.deleteSurveyResponse(id)
            if (!deleted) return res.status(404).json({ message: 'Respuesta no encontrada' })
            res.json({ message: 'Respuesta eliminada correctamente' })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export { SurveyResponseController }
