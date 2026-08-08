import {Question} from './models/Question.js';

async function getUniqueValues(){
    
    const values = await Question.distinct('relationship');
    console.log(values);
}

getUniqueValues();