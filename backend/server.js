import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

dotenv.config();
const app = express();
app.use(express.json()); //za parsiranje body-ja json zahteva
app.use(express.urlencoded({ extended: true })); //za request koji sadrzi podatke
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/baliexpress',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
});

app.use('/api/users',userRouter);

app.use('/api/products', productRouter);

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

//error catcher
app.use((err,req,res,next)=>{
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;

app.listen(5000, ()=>{
    console.log(`Serve at http://localhost:${port}/`); 
});