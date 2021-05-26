import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db';
import userRouter from './routes/user';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB();

app.use('/api/user', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever Started on Port ${PORT}`));
