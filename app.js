import express from 'express';
import bodyParser from 'body-parser';

var app = express();

//to get router
import userRouter from './router/user.router.js';
import categoryRouter from './router/category.router.js';

//configuration to extract request body content 
app.use(bodyParser());

app.use("/user",userRouter);
app.use("/category",categoryRouter);

app.listen(3000);
console.log("server started at http://localhost:3000");