import express from 'express';
import mongoose from 'mongoose';
import {Question} from './models/Question.js'
import { questionRouter } from './routes/questionRoutes.js';

import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();

app.use(express.json());

const PORT = 3000;

 mongoose.connect("mongodb+srv://nakiiruzie_db_user:NjqroIjKmqtrRrJ6@cluster0.fngsbwv.mongodb.net/conversationStarterDB?retryWrites=true&w=majority")
    .then(() => console.log('Successfully connected to MongoDB, Yippi'))
    .catch((error) => console.log(error))


// app.get('/api/questions', async (req,res,next) => {
//     try{
//         const questions = await Question.find();
//         res.status(200).json(questions);
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
//     next();
// })

// app.get('/api/questions', async (req,res) => {
//     try{
//         const {relationship} = req.query;
//         let filterData = {};
//         if(relationship){
//             filterData.relationship = relationship;
//         }
//         const resultQuestion = await Question.find(filterData);
//         res.json(resultQuestion);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     };
// });
    

app.use('/api/questions/', questionRouter);


app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})

