import express from 'express';
import dotenv from 'dotenv';
import {sql} from './config/db.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT

async function initDB(){
    try {
        await sql
    } catch (error) {
        
    }
}

app.get('/', (req, res) =>{
    res.send("its working");
})
console.log("MY port:",process.env.PORT) || 5002;


app.listen(PORT, () => {
    console.log('Server is running on port :', PORT);
})