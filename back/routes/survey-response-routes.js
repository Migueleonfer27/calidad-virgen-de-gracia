// Jaime Ortega 
import { Router } from 'express'
import { SurveyResponseController } from '../controllers/survey-response-controller.js'

export const router = Router()

router.get('/', SurveyResponseController.getAllSurveyResponses)
router.get('/:id', SurveyResponseController.getSurveyResponseById)
router.get('/survey/:surveyId', SurveyResponseController.getResponsesBySurveyId)
router.get('/question/:questionId', SurveyResponseController.getResponsesByQuestionId)
router.post('/', SurveyResponseController.postSurveyResponse)
router.put('/:id', SurveyResponseController.updateSurveyResponse)
router.delete('/:id', SurveyResponseController.deleteSurveyResponse)
