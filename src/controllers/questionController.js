import { Question } from "../models/Question.js";

export async function getQuestions(req,res,next){
    try{
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    next();
}

export async function getById(req,res,next) {
    const {id} = req.params;
    const question = await Question.findById(id);
    res.json(question);
    next();
}