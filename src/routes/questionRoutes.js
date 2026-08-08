import express from 'express'
import { getQuestions, getQuestionsById, getRandomQuestion, getDistinctQuestion } from "../controllers/questionController.js";

export const questionRouter = express.Router();

questionRouter.get('/', getQuestions);

questionRouter.get('/random', getRandomQuestion);

questionRouter.get('/distinct/:fieldName', getDistinctQuestion)

questionRouter.get('/:id', getQuestionsById);

