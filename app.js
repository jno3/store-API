import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import 'express-async-errors';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';


const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;

import productsRouter from './routes/products.js';

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('<h1>storeapi</h1><a href="/api/v1/products">products</a>');
})

app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        mongoose.connect(uri).then(() => {
            app.listen(port, console.log(`the server is listening on port ${port}`));
        })
    } catch (err) {

    }
}
start();