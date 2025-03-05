// Jaime Ortega
import { Survey } from '../../models/associations.js'

class SurveyConnection {
    async getAllSurveys() {
        try {
            return await Survey.findAll()
        } catch (error) {
            throw error
        }
    }

    async getSurveyById(id) {
        try {
            return await Survey.findByPk(id)
        } catch (error) {
            throw error
        }
    }

    async postSurvey(survey) {
        try {
            return await Survey.create(survey)
        } catch (error) {
            throw error
        }
    }

    async updateSurvey(id, survey) {
        try {
            const [updated] = await Survey.update(survey, { where: { id } })
            if (!updated) return null

            return await Survey.findByPk(id)
        } catch (error) {
            throw error
        }
    }


    async deleteSurvey(id) {
        try {
            return await Survey.destroy({ where: { id } })
        } catch (error) {
            throw error
        }
    }
}

export { SurveyConnection }