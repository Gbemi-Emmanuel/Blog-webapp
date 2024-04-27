import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(
    process.env.MONGO
)
    .then (() => {
        console.log('Mongdb is connected');
    })
    .catch((err) => {
        console.log(err);
    })

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});


app.get('/test', (req, res) => {
    res.json({message: 'API is working'})
})