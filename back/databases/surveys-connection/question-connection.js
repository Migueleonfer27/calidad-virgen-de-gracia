// Jaime Ortega 
import { Question } from '../../models/associations.js'

class QuestionConnection {
    async getAllQuestions() {
        try {
            return await Question.findAll()
        } catch (error) {
            throw error
        }
    }

    async getQuestionById(id) {
        try {
            return await Question.findByPk(id)
        } catch (error) {
            throw error
        }
    }

    async postQuestion(question) {
        try {
            return await Question.create(question)
        } catch (error) {
            throw error
        }
    }

    async updateQuestion(id, question) {
        try {
            return await Question.update(question, { where: { id } })
        } catch (error) {
            throw error
        }
    }

    async deleteQuestion(id) {
        try {
            return await Question.destroy({ where: { id } })
        } catch (error) {
            throw error
        }
    }
}

export { QuestionConnection }
