import { Router } from 'express';
import {categoryController} from '../controllers/categoryController.js'

export const router = Router();

router.post('/insert',categoryController.insert)
router.delete('/delete/:id',categoryController.delete)
router.put('/update',categoryController.update)
