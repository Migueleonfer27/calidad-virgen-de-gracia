// Jaime Ortega
import { Router } from 'express'
import { QuestionController } from '../controllers/question-controller.js'

export const router = Router()

router.get('/', QuestionController.getAllQuestions)
router.get('/:id', QuestionController.getQuestionById)
router.post('/', QuestionController.postQuestion)
router.put('/:id', QuestionController.updateQuestion)
router.delete('/:id', QuestionController.deleteQuestion)
