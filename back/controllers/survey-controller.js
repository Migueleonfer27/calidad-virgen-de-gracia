// Jaime Ortega
import { request, response } from 'express'
import { SurveyConnection } from '../databases/surveys-connection/survey-connection.js'

export const connection = new SurveyConnection

const SurveyController = {
    getAllSurveys: async (req, res = response) => {
        try {
            const surveys = await connection.getAllSurveys()
            res.status(200).json(surveys)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getSurveyById: async (req, res) => {
        try {
            const id = req.params.id
            const survey = await connection.getSurveyById(id)
            if (!survey) return res.status(404).json({ message: 'Encuesta no encontrada' })
            res.json(survey)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    postSurvey: async (req, res) => {
        try {
            const survey = await connection.postSurvey(req.body)
            res.status(201).json({ message: 'Encuesta creada', survey })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    updateSurvey: async (req, res) => {
        try {
            const id = req.params.id
            const updatedSurvey = await connection.updateSurvey(id, req.body)
            if (!updatedSurvey) {
                return res.status(404).json({ message: 'Encuesta no encontrada' })
            }
            res.json({ message: 'Encuesta actualizada correctamente', survey: updatedSurvey })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    deleteSurvey: async (req, res) => {
        try {
            const id = req.params.id
            const deleted = await connection.deleteSurvey(id)
            if (!deleted) return res.status(404).json({ message: 'Encuesta no encontrada' })
            res.json({ message: 'Encuesta eliminada correctamente' })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export { SurveyController }
