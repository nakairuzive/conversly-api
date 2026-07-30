import express from 'express'
import { getQuestions, getById } from "../controllers/questionController.js";

export const questionRouter = express.Router();

questionRouter.get('/', getQuestions);

questionRouter.get('/:id', getById);