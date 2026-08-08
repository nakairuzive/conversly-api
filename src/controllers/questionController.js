import { Question } from "../models/Question.js";

export async function getQuestions(req,res,next){
    try{
        const {relationship, familiarity, setting, tone, tags}  = req.query;
        let filteredQuestions = {};

        if(relationship){
            filteredQuestions.relationship = relationship;
        }

        if(familiarity){
            filteredQuestions.familiarity = familiarity;
        }

        if(setting){
            filteredQuestions.setting = setting;
        }

        if(tone){
            filteredQuestions.tone = tone;
        }

        if(tags){
            const tagsArray = Array.isArray(tags)?tags: [tags];
            filteredQuestions.tags = {$in: tagsArray};
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

export async function getRandomQuestion(req,res,next){
    try{
        const idArray = await Question.distinct('_id');

        const arrayLength = idArray.length;
        let randomNumber = Math.floor(Math.random() * (arrayLength + 1));
        
        const question = await Question.findById(idArray[randomNumber]);
        res.status(200).json(question);
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
    next();
}

export async function getDistinctQuestion(req,res,next){
    try{
        const {fieldName} = req.params;

        const allowedFields = ['relationship', 'familiarity', 'setting', 'tags', 'tone'];

        if(!allowedFields.includes(fieldName)){
            return res.status(400).json({message: 'Invalid field requested'})
        }

        const uniqueValues = await Question.distinct(fieldName);
        const cleanList = uniqueValues.filter(val => val !== null && val !== '');
        res.json(cleanList);
    } catch (error){
        res.status(500).json({message: 'Error retrieving field values', error: error.message})
    }
}

