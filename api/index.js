import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log("connected to MongoDB");
})
.catch((err)=> {
    console.log(err);
})

const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})