// Jaime Ortega
import { Router } from 'express'
import { SurveyController } from '../controllers/survey-controller.js'

export const router = Router()

router.get('/', SurveyController.getAllSurveys)
router.get('/:id', SurveyController.getSurveyById)
router.post('/', SurveyController.postSurvey)
router.put('/:id', SurveyController.updateSurvey)
router.delete('/:id', SurveyController.deleteSurvey)
