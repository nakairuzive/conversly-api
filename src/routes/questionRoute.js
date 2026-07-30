import express from 'express';
//import { getQuestions } from '../controllers/questionController.js';
import getQuestions from '../controllers/questionController.js';
//import questionController from '../controllers/questionController.js';


export const questionsRouter = express.Router();

questionsRouter.get('/', getQuestions);