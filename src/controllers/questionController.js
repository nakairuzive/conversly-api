import { Question } from "../models/Question.js";

export async function getQuestions(req,res,next){
    try{
        const {relationship}  = req.query;
        let filteredQuestions = {};

        if(relationship){
            filteredQuestions.relationship = relationship;
        }

        const questions = await Question.find(filteredQuestions);

        res.status(200).json(questions);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
    next();
}

export async function getQuestionsById(req,res,next) {
    const {id} = req.params;
    const question = await Question.findById(id);
    res.json(question);
    next();
}

// export async function getFilteredQuestions(req,res,next){
//     try{
//         const {relationship}  = req.query;
//         let filteredQuestions = {};

//         if(relationship){
//             filteredQuestions.relationship = relationship;
//         }

//         const result = await Question.find(filteredQuestions);

//         res.json(result);

//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
//     next();
// }