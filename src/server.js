import express from 'express';
import mongoose from 'mongoose';
import {Question} from './models/Question.js'
import { questionRouter } from './routes/questionRoutes.js';
import cors from "cors";

import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();

app.use(express.json());

app.use(cors());

const PORT = 3000;

mongoose.connect("mongodb+srv://nakiiruzie_db_user:NjqroIjKmqtrRrJ6@cluster0.fngsbwv.mongodb.net/conversationStarterDB?retryWrites=true&w=majority")
    .then(() => console.log('Successfully connected to MongoDB, Yippi'))
    .catch((error) => console.log(error))


app.use('/api/v1/questions/', questionRouter);


app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})

