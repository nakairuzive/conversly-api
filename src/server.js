import express from 'express';
import mongoose from 'mongoose';
import {Question} from './models/Question.js'

import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();

app.use(express.json());

const PORT = 3000;

/* mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB, Yippi'))
    .catch((error) => console.log(error))
*/

app.get('/api/questions', async (req,res) => {
    try{
        console.log(req.params)
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})