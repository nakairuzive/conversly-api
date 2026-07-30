import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: String,
    relationship: String,
    familiarity: String,
    setting: String,
    tone: String,
    tags: [String]
});

export const Question =  mongoose.model('Question', questionSchema);