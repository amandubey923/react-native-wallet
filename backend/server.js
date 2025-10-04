import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT


app.get('/', (req, res) =>{
    res.send("its working");
})
console.log("MY port:",process.env.PORT) || 5002;


app.listen(PORT, () => {
    console.log('Server is running on port :', PORT);
})