import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
const port = 3000;
const app = express();
app.use(express.json());

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log("connected to MongoDB");
})
.catch((err)=> {
    console.log(err);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

