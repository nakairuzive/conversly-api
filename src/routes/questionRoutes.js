import express from 'express'
import { getQuestions, getQuestionsById } from "../controllers/questionController.js";

export const questionRouter = express.Router();

questionRouter.get('/', getQuestions);

questionRouter.get('/:id', getQuestionsById);

// questionRouter.get('/', getFilteredQuestions);