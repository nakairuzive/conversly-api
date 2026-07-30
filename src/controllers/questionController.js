// Controller for getting all the questions
import {Question} from './models/Question.js'

export async function getQuestions (req,res) {
    try{
        console.log(req.params)
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}