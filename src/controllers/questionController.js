import { Question } from "../models/Question.js";

export async function getQuestions(req,res){
    try{
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}