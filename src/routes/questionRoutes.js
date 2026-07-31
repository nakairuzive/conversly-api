import express from 'express'
import { getQuestions, getQuestionsById, getRandomQuestion } from "../controllers/questionController.js";

export const questionRouter = express.Router();

questionRouter.get('/', getQuestions);

questionRouter.get('/random', getRandomQuestion);

questionRouter.get('/:id', getQuestionsById);