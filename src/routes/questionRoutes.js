import express from 'express'
import { getQuestions } from "../controllers/questionController.js";

export const questionRouter = express.Router();

questionRouter.get('/', getQuestions);