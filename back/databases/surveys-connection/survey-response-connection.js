import { Op } from 'sequelize'
import { Question, Survey, SurveyResponse } from '../../models/associations.js'

class SurveyResponseConnection {
    async getAllSurveyResponses() {
        try {
            return await SurveyResponse.findAll({
                include: [
                    { model: Survey },
                    { model: Question }
                ]
            })
        } catch (error) {
            throw error
        }
    }

    async getSurveyResponseById(id) {
        try {
            return await SurveyResponse.findByPk(id, {
                include: [
                    { model: Survey },
                    { model: Question }
                ]
            })
        } catch (error) {
            throw error
        }
    }

    async getResponsesBySurveyId(surveyId) {
        try {
            return await SurveyResponse.findAll({
                where: { survey_id: surveyId },
                include: [{
                    model: Question
                }]
            })
        } catch (error) {
            throw error
        }
    }

    async getResponsesByQuestionId(questionId) {
        try {
            return await SurveyResponse.findAll({
                where: { question_id: questionId },
                include: [{
                    model: Survey
                }]
            })
        } catch (error) {
            throw error
        }
    }

    async postSurveyResponse(survey) {
        try {
            return await SurveyResponse.create(survey)
        } catch (error) {
            throw error
        }
    }

    async updateSurveyResponse(id, survey) {
        try {
            return await SurveyResponse.update(survey, { where: { id } })
        } catch (error) {
            throw error
        }
    }

    async deleteSurveyResponse(id) {
        try {
            return await SurveyResponse.destroy({ where: { id } })
        } catch (error) {
            throw error
        }
    }
}

export { SurveyResponseConnection }